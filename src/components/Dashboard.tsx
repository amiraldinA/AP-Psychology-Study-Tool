import React from 'react';
import { useStore } from '../store';
import { studyData } from '../data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Progress } from './ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Dashboard = ({ onNavigate }: { onNavigate: (view: string, unitId?: string) => void }) => {
  const { state } = useStore();

  const chartData = studyData.map((unit) => ({
    name: unit.id.replace('unit-', 'U'),
    mastery: state.unitMastery[unit.id] || 0,
    fullTitle: unit.title,
  }));

  const totalMastery = chartData.reduce((acc, curr) => acc + curr.mastery, 0) / (chartData.length || 1);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 w-full max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-light tracking-tight text-white mb-2 font-serif italic">Progress Dashboard</h1>
        <p className="text-[#888888] text-sm">Track your mastery across all units.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="col-span-1 border border-[#222222] bg-[#121212] p-8 flex flex-col items-center justify-center">
          <div className="text-[11px] uppercase tracking-widest text-[#555555] font-bold mb-4">Overall Mastery</div>
          <div className="text-5xl font-light text-white mb-6">{Math.round(totalMastery)}<span className="text-2xl text-[#666666]">%</span></div>
          <div className="w-full h-1 bg-[#222222] rounded-full overflow-hidden">
            <div className="h-full bg-[#a88a5f] transition-all duration-1000" style={{ width: `${totalMastery}%` }}></div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 border border-[#222222] bg-[#121212] p-6 flex flex-col">
          <div className="text-[11px] uppercase tracking-widest text-[#555555] font-bold mb-6">Mastery by Unit</div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222222" vertical={false} />
                <XAxis dataKey="name" stroke="#666666" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#666666" fontSize={11} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip 
                  cursor={{ fill: '#1a1a1a' }}
                  contentStyle={{ backgroundColor: '#111111', borderColor: '#222222', color: '#e0e0e0', borderRadius: '4px', fontSize: '12px' }}
                  formatter={(value: number) => [`${value}%`, 'Mastery']}
                  labelStyle={{ color: '#888888', marginBottom: '8px' }}
                />
                <Bar dataKey="mastery" fill="#a88a5f" radius={[2, 2, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#555555] font-bold">Course Units</h4>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Custom Quiz Promo Card */}
          <div className="bg-[#121212] border border-dashed border-[#a88a5f]/30 flex flex-col p-6 hover:border-[#a88a5f]/60 transition-all group shadow-sm">
            <div className="mb-4">
              <div className="text-[10px] text-[#a88a5f] uppercase tracking-widest mb-2 font-bold flex items-center gap-1 font-mono">
                ✦ Practice Hub
              </div>
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#a88a5f] transition-colors">Compose Handcrafted Quizzes</h3>
              <p className="text-sm text-[#888888]">Assemble standard questions from our 9 textbook units or script custom diagnostics from scratch.</p>
            </div>
            <div className="mt-auto pt-6">
              <button
                onClick={() => onNavigate('custom-quizzes')}
                className="w-full py-3 text-[10px] bg-[#1a1a1a] border border-[#a88a5f]/30 hover:border-[#a88a5f] text-[#a88a5f] hover:text-white transition-all uppercase tracking-widest font-bold cursor-pointer"
              >
                Launch Custom Creator
              </button>
            </div>
          </div>

          {studyData.map((unit) => (
            <div key={unit.id} className="bg-[#121212] border border-[#222222] flex flex-col p-6 hover:border-[#333333] transition-colors">
              <div className="mb-4">
                <div className="text-[10px] text-[#666666] uppercase tracking-widest mb-2">
                  {unit.id.toUpperCase().replace('-', ' ')}
                </div>
                <h3 className="text-lg font-medium text-white mb-2 line-clamp-1">{unit.title.split(': ')[1] || unit.title}</h3>
                <p className="text-sm text-[#888888] line-clamp-2">{unit.description}</p>
              </div>
              
              <div className="mt-auto pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#555555]">Mastery</span>
                  <span className="text-xs text-[#a88a5f] font-medium">{Math.round(state.unitMastery[unit.id] || 0)}%</span>
                </div>
                <div className="w-full h-1 bg-[#222222] rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-white transition-all duration-1000" style={{ width: `${state.unitMastery[unit.id] || 0}%` }}></div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => onNavigate('flashcards', unit.id)}
                    className="flex-1 py-2 text-[10px] border border-[#333333] hover:bg-white hover:text-black transition-all uppercase tracking-widest text-[#999999]"
                  >
                    Flashcards
                  </button>
                  <button 
                    onClick={() => onNavigate('quiz', unit.id)}
                    className="flex-1 py-2 text-[10px] border border-[#a88a5f]/30 text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all uppercase tracking-widest"
                  >
                    Quiz
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
