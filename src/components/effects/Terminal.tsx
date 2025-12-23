import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function Terminal() {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([]);
  const currentPath = '~/nick-portfolio';
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Start with empty history
    setHistory([]);
  }, []);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = '';

    switch (trimmedCmd) {
      case 'help':
        output = `Available commands:
  help          - Show this help message
  about         - Navigate to About page
  resume        - Open resume PDF
  learnings     - Navigate to Learnings page
  projects      - Navigate to Projects
  clear         - Clear terminal
  whoami        - Show information about Nick
  ls            - List available sections
  pwd           - Show current path`;
        break;

      case 'whoami':
        output = `Nick Milien
Technical Product Manager & Electronics Engineer
I identify the friction points that block great experiences.`;
        break;

      case 'ls':
        output = `About  resume  learnings  projects  Cedchat`;
        break;

      case 'pwd':
        output = currentPath;
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'about':
        output = 'Navigating to About page...';
        setTimeout(() => navigate('/about'), 500);
        break;

      case 'learnings':
        output = 'Navigating to Learnings page...';
        setTimeout(() => navigate('/learnings'), 500);
        break;

      case 'projects':
        output = 'Navigating to Projects...';
        setTimeout(() => navigate('/'), 500);
        break;

      case 'resume':
        output = 'Opening resume...';
        setTimeout(() => {
          window.open(encodeURI("/images/_PM concised V7.4.pdf"), '_blank');
        }, 500);
        break;

      case 'cedchat':
        output = `Cedchat (Cedrick) - Nick's Digital Secretary & Voice AI Assistant
Cedrick is Nick's personal AI assistant and digital alter-ego.
He guides users, hypes up Nick's achievements, and helps connect visitors with Nick.
Look for the voice assistant button on the homepage to interact with Cedrick!`;
        break;

      case '':
        output = '';
        break;

      default:
        output = `Command not found: ${cmd}\nType "help" to see available commands.`;
    }

    if (trimmedCmd !== 'clear') {
      setHistory(prev => [...prev, { command: cmd, output }]);
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
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 md:mt-16 mb-8">
      <div 
        className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-2xl cursor-text"
        onClick={handleTerminalClick}
      >
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-2 flex items-center gap-2 border-b border-[#30363d]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-xs text-[#888888] ml-2 font-mono">bash — 80×24</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto scrollbar-thin">
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              {item.command && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#a8a8a8]">nick@portfolio</span>
                  <span className="text-[#888888]">:</span>
                  <span className="text-[#909090]">{currentPath}</span>
                  <span className="text-[#888888]">$</span>
                  <span className="text-[#cccccc]">{item.command}</span>
                </div>
              )}
              {item.output && (
                <div className="text-[#888888] whitespace-pre-wrap ml-0">
                  {item.output}
                </div>
              )}
            </div>
          ))}

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
            <span className="text-[#a8a8a8]">nick@portfolio</span>
            <span className="text-[#888888]">:</span>
            <span className="text-[#909090]">{currentPath}</span>
            <span className="text-[#888888]">$</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[#cccccc] outline-none border-none focus:outline-none"
              autoFocus
              autoComplete="off"
            />
            <span className="text-[#888888] animate-pulse">▊</span>
          </form>
        </div>
      </div>
    </div>
  );
}

