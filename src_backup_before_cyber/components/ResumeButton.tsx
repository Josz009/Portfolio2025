import React from 'react';
import { Download } from 'lucide-react';

interface ResumeButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  showIcon?: boolean;
  text?: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ 
  className = '', 
  variant = 'secondary',
  showIcon = true,
  text = 'Download Resume'
}) => {
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Open in new tab
    window.open('/Jose_Carlos_Estrada_Resume.pdf', '_blank');
    
    // Trigger download after a short delay
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/Jose_Carlos_Estrada_Resume.pdf';
      link.download = 'Jose_Carlos_Estrada_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  const baseClasses = variant === 'primary' 
    ? 'bg-cyber-blue text-white hover:bg-blue-600'
    : 'border-2 border-slate-300 text-slate-700 hover:border-cyber-blue hover:text-cyber-blue';

  return (
    <a
      href="/Jose_Carlos_Estrada_Resume.pdf"
      onClick={handleResumeClick}
      className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 ${baseClasses} ${className}`}
    >
      {showIcon && <Download className="w-5 h-5" />}
      {text}
    </a>
  );
};

export default ResumeButton;