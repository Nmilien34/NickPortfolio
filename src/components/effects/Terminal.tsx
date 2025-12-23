import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface FileSystemNode {
  type: 'file' | 'directory';
  content?: string;
  route?: string;
  children?: { [key: string]: FileSystemNode };
}

const fileSystem: { [key: string]: FileSystemNode } = {
  'about': {
    type: 'file',
    content: 'Navigate to About page to learn more about Nick',
    route: '/about'
  },
  'resume.pdf': {
    type: 'file',
    content: 'Nick Milien\'s Resume - Technical Product Manager & Electronics Engineer',
    route: '/images/_PM concised V7.4.pdf'
  },
  'learnings': {
    type: 'file',
    content: 'Navigate to Learnings page to see what Nick has learned',
    route: '/learnings'
  },
  'timeline': {
    type: 'directory',
    children: {
      'early-years': { type: 'file', route: '/early-years', content: 'Early Years in the US (2015-2017)' },
      'origin-of-hustle': { type: 'file', route: '/the-origin-of-the-hustle', content: 'The Origin of the Hustle (2018-2019)' },
      'three-jobs-dream': { type: 'file', route: '/three-jobs-a-dream', content: 'Three Jobs & A Dream (2019-2020)' },
      'entrepreneur': { type: 'file', route: '/the-entrepreneur', content: 'The Entrepreneur (2020-2023)' },
      'realizing-ceiling': { type: 'file', route: '/realizing-the-ceiling', content: 'Realizing the Ceiling (2023-2024)' },
      'lawnstackin': { type: 'file', route: '/lawnstackin', content: 'Lawnstackin.. (2024-2025)' },
      'the-engineer': { type: 'file', route: '/the-engineer', content: 'The Engineer (2025-2026)' },
    }
  },
  'cedchat': {
    type: 'file',
    content: `Cedchat (Cedrick) - Nick's Digital Secretary & Voice AI Assistant
Cedrick is Nick's personal AI assistant and digital alter-ego.
He guides users, hypes up Nick's achievements, and helps connect visitors with Nick.
Look for the voice assistant button on the homepage to interact with Cedrick!`
  }
};

export function Terminal() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState<string[]>(['~', 'nick-portfolio']);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setHistory([{
      command: '',
      output: `Welcome to my portfolio, if you didn't like Ced, you might find the terminal more useful.
Type "help" to see available commands`
    }]);
  }, []);

  const getCurrentDirectory = (): { [key: string]: FileSystemNode } => {
    if (currentPath.length <= 2) return fileSystem;

    let current = fileSystem;
    for (let i = 2; i < currentPath.length; i++) {
      const dir = current[currentPath[i]];
      if (dir && dir.type === 'directory' && dir.children) {
        current = dir.children;
      }
    }
    return current;
  };

  const resolvePath = (path: string): string[] => {
    if (path === '/') return ['~', 'nick-portfolio'];
    if (path === '~') return ['~', 'nick-portfolio'];

    let newPath = [...currentPath];
    const parts = path.split('/').filter(p => p !== '');

    for (const part of parts) {
      if (part === '..') {
        if (newPath.length > 2) newPath.pop();
      } else if (part !== '.' && part !== '~') {
        newPath.push(part);
      }
    }

    return newPath;
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const parts = trimmedCmd.split(' ');
    const baseCmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    let output = '';

    switch (baseCmd) {
      case 'help':
        output = `Available commands:
  help          - Show this help message
  ls            - List directory contents
  cd <dir>      - Change directory (use 'cd ..' to go back)
  pwd           - Print working directory
  cat <file>    - Display file contents
  open <file>   - Open file/navigate to page
  clear         - Clear terminal
  whoami        - Show information about Nick
  tree          - Show directory structure
  exit          - Scroll to top of page`;
        break;

      case 'whoami':
        output = `Nick Milien
Technical Product Manager & Electronics Engineer
I identify the friction points that block great experiences.`;
        break;

      case 'ls':
        const currentDir = getCurrentDirectory();
        const items = Object.keys(currentDir).map(key => {
          const item = currentDir[key];
          return item.type === 'directory' ? `${key}/` : key;
        });
        output = items.join('  ');
        break;

      case 'pwd':
        output = currentPath.join('/');
        break;

      case 'cd':
        if (args.length === 0) {
          setCurrentPath(['~', 'nick-portfolio']);
          output = '';
        } else {
          const targetPath = resolvePath(args[0]);
          const targetDir = getCurrentDirectory();

          if (args[0] === '..' && currentPath.length > 2) {
            setCurrentPath(targetPath);
            output = '';
          } else if (args[0] === '/' || args[0] === '~') {
            setCurrentPath(['~', 'nick-portfolio']);
            output = '';
          } else {
            const dirName = args[0].replace('/', '');
            if (targetDir[dirName] && targetDir[dirName].type === 'directory') {
              setCurrentPath([...currentPath, dirName]);
              output = '';
            } else if (targetDir[dirName] && targetDir[dirName].type === 'file') {
              // If it's a file, open it instead of showing error
              const file = targetDir[dirName];
              if (file.route) {
                output = `Opening ${dirName}...`;
                setTimeout(() => {
                  if (file.route!.endsWith('.pdf')) {
                    window.open(encodeURI(file.route!), '_blank');
                  } else {
                    navigate(file.route!);
                  }
                }, 500);
              } else if (file.content) {
                output = file.content;
              }
            } else {
              output = `cd: ${dirName}: No such file or directory`;
            }
          }
        }
        break;

      case 'cat':
        if (args.length === 0) {
          output = 'cat: missing file operand';
        } else {
          const currentDir = getCurrentDirectory();
          const fileName = args[0];
          const file = currentDir[fileName];

          if (file && file.type === 'file' && file.content) {
            output = file.content;
          } else if (file && file.type === 'directory') {
            output = `cat: ${fileName}: Is a directory`;
          } else {
            output = `cat: ${fileName}: No such file or directory`;
          }
        }
        break;

      case 'open':
        if (args.length === 0) {
          output = 'open: missing file operand';
        } else {
          const currentDir = getCurrentDirectory();
          const fileName = args[0];
          const file = currentDir[fileName];

          if (file && file.route) {
            output = `Opening ${fileName}...`;
            setTimeout(() => {
              if (file.route!.endsWith('.pdf')) {
                window.open(encodeURI(file.route!), '_blank');
              } else {
                navigate(file.route!);
              }
            }, 500);
          } else if (file && file.type === 'directory') {
            output = `open: ${fileName}: Is a directory (use 'cd ${fileName}' to enter)`;
          } else {
            output = `open: ${fileName}: No such file or directory`;
          }
        }
        break;

      case 'tree':
        const buildTree = (dir: { [key: string]: FileSystemNode }, prefix = ''): string => {
          const entries = Object.entries(dir);
          let result = '';
          entries.forEach(([name, node], index) => {
            const isLast = index === entries.length - 1;
            const linePrefix = isLast ? '└── ' : '├── ';
            const continuationPrefix = isLast ? '    ' : '│   ';

            result += prefix + linePrefix + name + (node.type === 'directory' ? '/\n' : '\n');

            if (node.type === 'directory' && node.children) {
              result += buildTree(node.children, prefix + continuationPrefix);
            }
          });
          return result;
        };

        output = currentPath.join('/') + '/\n' + buildTree(getCurrentDirectory());
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        output = 'Scrolling to top...';
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
        break;

      case '':
        output = '';
        break;

      default:
        output = `bash: ${baseCmd}: command not found\nType "help" to see available commands.`;
    }

    if (baseCmd !== 'clear') {
      setHistory(prev => [...prev, { command: cmd, output }]);
    }

    // Add to command history
    if (cmd.trim()) {
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      executeCommand(command);
      setCommand('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCommand('');
        } else {
          setHistoryIndex(newIndex);
          setCommand(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const pathString = currentPath.join('/');

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 md:mt-16 mb-8">
      <div
        className="bg-[#0a0a0a] border border-stroke-border rounded-lg overflow-hidden shadow-2xl cursor-text"
        onClick={handleTerminalClick}
      >
        {/* Terminal Header */}
        <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-stroke-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#666666]"></div>
            <div className="w-3 h-3 rounded-full bg-[#888888]"></div>
            <div className="w-3 h-3 rounded-full bg-[#aaaaaa]"></div>
          </div>
          <span className="text-xs text-normal-text ml-2 font-mono">bash — 80×24</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto scrollbar-thin">
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              {item.command && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-normal-text">nick@portfolio</span>
                  <span className="text-[#808080]">:</span>
                  <span className="text-[#999999]">{pathString}</span>
                  <span className="text-[#808080]">$</span>
                  <span className="text-text-white">{item.command}</span>
                </div>
              )}
              {item.output && (
                <div className="text-normal-text whitespace-pre-wrap ml-0">
                  {item.output}
                </div>
              )}
            </div>
          ))}

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
            <span className="text-normal-text">nick@portfolio</span>
            <span className="text-[#808080]">:</span>
            <span className="text-[#999999]">{pathString}</span>
            <span className="text-[#808080]">$</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-text-white outline-none border-none focus:outline-none"
              autoFocus
              autoComplete="off"
            />
            <span className="text-[#808080] animate-pulse">▊</span>
          </form>
        </div>
      </div>
    </div>
  );
}
