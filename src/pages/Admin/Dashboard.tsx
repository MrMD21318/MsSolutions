import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, MessageSquare, Clock, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import config from '../../config';

interface DashboardStats {
    totalVisits: number;
    todayVisits: number;
    weeklyStats: { date: string; count: number }[];
}

interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
    timestamp: string;
}

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [activeTab, setActiveTab] = useState<'overview' | 'messages'>('overview');
    const navigate = useNavigate();

    useEffect(() => {
        fetchStats();
        fetchMessages();
    }, []);

    const fetchStats = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${config.API_URL}/stats`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.status === 401 || res.status === 403) {
                handleLogout();
                return;
            }
            const data = await res.json();
            setStats(data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${config.API_URL}/messages`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.status === 401 || res.status === 403) {
                handleLogout();
                return;
            }
            const data = await res.json();
            setMessages(data.messages);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/admin/login');
    };

    return (
        <div style={{ minHeight: '100vh', background: '#0a0e17', color: 'white', padding: '2rem' }}>
            <div className="container">
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>
                        Admin <span style={{ color: '#06b6d4' }}>Dashboard</span>
                    </h1>
                    <button
                        onClick={handleLogout}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(239, 68, 68, 0.1)',
                            color: '#ef4444',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            cursor: 'pointer'
                        }}
                    >
                        <LogOut size={18} /> Logout
                    </button>
                </div>

                {/* KPI Cards */}
                {stats && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div>
                                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Total Visits</p>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>{stats.totalVisits}</h3>
                                </div>
                                <div style={{ padding: '0.5rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '0.5rem' }}>
                                    <Users size={24} color="#06b6d4" />
                                </div>
                            </div>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div>
                                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Today's Visits</p>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>{stats.todayVisits}</h3>
                                </div>
                                <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '0.5rem' }}>
                                    <Clock size={24} color="#8b5cf6" />
                                </div>
                            </div>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <div>
                                    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Total Messages</p>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>{messages.length}</h3>
                                </div>
                                <div style={{ padding: '0.5rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '0.5rem' }}>
                                    <MessageSquare size={24} color="#22c55e" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <button
                        onClick={() => setActiveTab('overview')}
                        style={{
                            padding: '1rem 0',
                            background: 'transparent',
                            border: 'none',
                            color: activeTab === 'overview' ? '#06b6d4' : '#9ca3af',
                            borderBottom: activeTab === 'overview' ? '2px solid #06b6d4' : '2px solid transparent',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 500,
                            marginRight: '1rem'
                        }}
                    >
                        Overview Analysis
                    </button>
                    <button
                        onClick={() => setActiveTab('messages')}
                        style={{
                            padding: '1rem 0',
                            background: 'transparent',
                            border: 'none',
                            color: activeTab === 'messages' ? '#06b6d4' : '#9ca3af',
                            borderBottom: activeTab === 'messages' ? '2px solid #06b6d4' : '2px solid transparent',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 500
                        }}
                    >
                        Messages Inbox
                    </button>
                </div>

                {/* Content */}
                {activeTab === 'overview' && stats && (
                    <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', height: '400px' }}>
                        <h3 style={{ marginBottom: '2rem', fontWeight: 600 }}>Last 7 Days Visits</h3>
                        <ResponsiveContainer width="100%" height="85%">
                            <BarChart data={stats.weeklyStats}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="date" stroke="#9ca3af" />
                                <YAxis stroke="#9ca3af" />
                                <Tooltip
                                    contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}
                                    itemStyle={{ color: 'white' }}
                                />
                                <Bar dataKey="count" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                    <th style={{ padding: '1rem', color: '#9ca3af' }}>Date</th>
                                    <th style={{ padding: '1rem', color: '#9ca3af' }}>Name</th>
                                    <th style={{ padding: '1rem', color: '#9ca3af' }}>Email</th>
                                    <th style={{ padding: '1rem', color: '#9ca3af' }}>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg) => (
                                    <tr key={msg.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '1rem', color: '#9ca3af', fontSize: '0.875rem' }}>
                                            {new Date(msg.timestamp).toLocaleDateString()}
                                        </td>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>{msg.name}</td>
                                        <td style={{ padding: '1rem', color: '#06b6d4' }}>{msg.email}</td>
                                        <td style={{ padding: '1rem', maxWidth: '300px', color: '#d1d5db' }}>{msg.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {messages.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
                                No messages found.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
