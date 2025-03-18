import React, { useState, useEffect } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  TooltipProps
} from 'recharts';
import { 
  ValueType, 
  NameType
} from 'recharts/types/component/DefaultTooltipContent';
import { ChevronsUp, Circle, Users, Percent, DollarSign } from "lucide-react";

// Utility function for class names merging
const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

// Range Slider Component
interface RangeSliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  onChange: (value: number) => void;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  formatValue?: (value: number) => string;
}

const RangeSlider = ({
  min,
  max,
  value,
  step = 1,
  onChange,
  title,
  description,
  icon,
  formatValue = (val) => val.toString()
}: RangeSliderProps) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  const dynamicColor = `hsl(${percentage}, 74%, 60%)`; // Dynamically change color

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="space-y-2 w-full animate-fade-in">
      {/* Title and Value Display */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div style={{ color: dynamicColor }}>
            {icon}
          </div>
          <div>
            <h3 className="text-sm font-medium" style={{ color: dynamicColor }}>{title}</h3>
            {description && (
              <p className="text-xs" style={{ color: dynamicColor }}>
                {description}
              </p>
            )}
          </div>
        </div>
        <span className="text-sm font-semibold" style={{ color: dynamicColor }}>
          {formatValue(value)}
        </span>
      </div>

      {/* Custom Styled Range Slider */}
      <div className="relative w-full h-8 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="w-full absolute z-10 cursor-pointer opacity-0 h-6"
        />
        
        {/* Track with changing colors */}
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all"
            style={{
              width: `${percentage}%`,
              background: dynamicColor, // Dynamic color for progress bar
            }}
          />
        </div>

        {/* Thumb Indicator */}
        <div
          className="absolute h-4 w-4 rounded-full border-2 border-background shadow-md transform -translate-y-1/2 top-1/2 pointer-events-none transition-all"
          style={{
            left: `calc(${percentage}% - 8px)`,
            background: dynamicColor, // Thumb color updates dynamically
          }}
        />
      </div>

      {/* Min & Max Labels */}
      <div className="flex justify-between text-xs" style={{ color: dynamicColor }}>
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
};

// Result Card Component
interface ResultCardProps {
  title: string;
  value: string;
  change?: string;
  icon?: React.ReactNode;
  className?: string;
  valueClassName?: string;
}

const ResultCard = ({
  title,
  value,
  change,
  icon = <Circle className="h-5 w-5" />,
  className,
  valueClassName
}: ResultCardProps) => {
  return (
    <div className={cn("p-4 space-y-2 glass-card rounded-xl animate-scale-in", className)}>
      <div className="flex items-center gap-2">
        <div className="text-white">
          {icon}
        </div>
        <h3 className="text-sm font-medium text-white">{title}</h3>
      </div>
      <div className="flex items-end justify-between">
        <p className={cn("text-2xl font-bold font-bold mb-6 bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent", valueClassName)}>{value}</p>
        
      </div>
    </div>
  );
};

// Chart Component
interface RDIChartProps {
  data: Array<{
    name: string;
    leads: number;
    value: number;
  }>;
  className?: string;
}

const CustomTooltip = ({ 
  active, 
  payload, 
  label 
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 rounded-lg shadow-lg border border-border neo-border">
        <p className="text-sm font-medium text-[#a855f7]">{`${label}`}</p>
        <p className="text-sm text-[#a855f7]">{`Leads: ${payload[0].value}`}</p>
        <p className="text-sm text-emerald-500 text-[#a855f7]">{`Value: $${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const RDIChart = ({ data, className }: RDIChartProps) => {
  return (
    <div className={cn("w-full p-2", className)}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(43, 74%, 66%)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(43, 74%, 66%)" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(36, 74%, 56%)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(36, 74%, 56%)" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
          <XAxis 
            dataKey="name" 
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            stroke="hsl(var(--border))"
          />
          <YAxis 
            yAxisId="left"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            stroke="hsl(var(--border))"
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            stroke="hsl(var(--border))"
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            yAxisId="left"
            type="monotone" 
            dataKey="leads" 
            stroke="hsl(43, 74%, 66%)" 
            fillOpacity={1}
            fill="url(#colorLeads)" 
            strokeWidth={2}
          />
          <Area 
            yAxisId="right"
            type="monotone" 
            dataKey="value" 
            stroke="hsl(36, 74%, 56%)" 
            fillOpacity={1}
            fill="url(#colorValue)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// Main RDI Calculator Component
const RDICalculatorComplete = () => {
  const [visitors, setVisitors] = useState(1000);
  const [engagementRate, setEngagementRate] = useState(3);
  const [conversionRate, setConversionRate] = useState(5);
  const [leads, setLeads] = useState(0);
  const [value, setValue] = useState(0);
  const [chartData, setChartData] = useState<Array<{name: string, leads: number, value: number}>>([]);

  // Calculate results whenever inputs change
  useEffect(() => {
    const calculatedLeads = Math.round((visitors * engagementRate * conversionRate) / 100);
    const calculatedValue = calculatedLeads * 50;
    
    setLeads(calculatedLeads);
    setValue(calculatedValue);
    
    // Generate chart data based on current values
    generateChartData(visitors, engagementRate, conversionRate);
  }, [visitors, engagementRate, conversionRate]);

  // Generate 6 months of data for the chart
  const generateChartData = (visitors: number, engagementRate: number, conversionRate: number) => {
    const data = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    
    for (let i = 0; i < months.length; i++) {
      // Add some variability to the data for more realistic chart
      const variability = 0.9 + Math.random() * 0.2;
      const monthVisitors = Math.round(visitors * variability);
      const monthLeads = Math.round((monthVisitors * engagementRate * conversionRate) / 100);
      const monthValue = monthLeads * 50;
      
      data.push({
        name: months[i],
        leads: monthLeads,
        value: monthValue
      });
    }
    
    setChartData(data);
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto p-4 space-y-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent text-center">RDI Calculator</h1>
      
      {/* Main Card with inputs and results */}
      <div className="grid md:grid-cols-2 gap-6 glass-card p-6 rounded-xl">
        {/* Left side - Inputs */}
        <div className="flex flex-col space-y-6">
          
          
          <RangeSlider
            min={100}
            max={10000}
            step={100}
            value={visitors}        
            onChange={setVisitors}
            title="Monthly Website Visitors"
            icon={<Users className="h-5 w-5" />}
            formatValue={(val) => val.toLocaleString()}
          />
          
          <RangeSlider
            min={1}
            max={10}
            step={0.5}
            value={engagementRate}
            onChange={setEngagementRate}
            title="Expected Engagement Rate"
            icon={<Percent className="h-5 w-5" />}
            formatValue={(val) => `${val}%`}
          />
          
          <RangeSlider
            min={1}
            max={20}
            step={0.5}
            value={conversionRate}
            onChange={setConversionRate}
            title="Expected Conversion Rate"
            icon={<Percent className="h-5 w-5" />}
            formatValue={(val) => `${val}%`}
          />
        </div>
        
        {/* Right side - Results */}
        <div className="flex flex-col justify-center space-y-6">
         
          
          <ResultCard
            title="Monthly Qualified Leads"
            value={leads.toLocaleString()}
            change={`${Math.round((leads / visitors) * 100)}% of visitors`}
            icon={<Users className="h-5 w-5" />}
          />
          
          <ResultCard
            title="Monthly Estimated Value"
            value={`$${value.toLocaleString()}`}
            change={`$50 per lead`}
            icon={<DollarSign className="h-5 w-5" />}
            valueClassName="text-primary"
          />
        </div>
      </div>
      
      {/* Chart section */}
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-lg font-semibold font-bold mb-6 bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent">6-Month Projection</h2>
        <RDIChart data={chartData} />
      </div>
      
      {/* Some additional info */}
      <div className="text-center text-sm font-bold mb-6 bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent">
        <p>This calculator estimates potential leads and value based on current digital marketing performance.</p>
        <p>Adjust the sliders to see how changes in traffic and conversion rates impact your results.</p>
      </div>
    </div>
  );
};

export default RDICalculatorComplete;

