import BWOctagon from '@/components/atoms/BWOctagon';
import { OctagonItem } from '@/types/octagon';

type OctagonGridPanelProps = {
  title: string;
  items: OctagonItem[];
};

const openExternalUrl = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const OctagonGridPanel = ({ title, items }: OctagonGridPanelProps) => {
  return (
    <div className="flex flex-col items-center bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl shadow-2xl p-6 max-w-3xl mx-auto m-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent pointer-events-none" />
      <div className="flex items-center space-x-3 mb-8 border-b-2 border-gray-700 pb-2 px-10 z-10">
        <h3 className="text-2xl font-bold tracking-widest text-gray-200">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-2 w-full justify-items-center">
        {items.map((item) => (
          <BWOctagon
            key={item.text}
            text={item.text}
            status={item.status}
            onClick={item.url ? () => openExternalUrl(item.url!) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default OctagonGridPanel;
