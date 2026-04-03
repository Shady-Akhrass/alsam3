import React, { useState } from 'react';
import Skeleton, { SkeletonConfigs } from '../Components/UI/Skeleton';

export default function SkeletonExamples() {
    const [loading, setLoading] = useState(true);

    const toggleLoading = () => {
        setLoading(!loading);
    };

    return (
        <div style={{ padding: '2rem', direction: 'rtl' }}>
            <h1>Skeleton Component Examples</h1>
            
            <button onClick={toggleLoading} style={{ marginBottom: '2rem' }}>
                {loading ? 'Show Content' : 'Show Skeleton'}
            </button>

            {/* Login Form Example */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Login Form Skeleton</h2>
                <Skeleton loading={loading} {...SkeletonConfigs.loginForm}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            width: '60px', 
                            height: '60px', 
                            margin: '0 auto 2rem auto', 
                            borderRadius: '50%',
                            background: '#ccc'
                        }}></div>
                        <h3>مرحباً بعودتك</h3>
                        <p>سجّل دخولك للمتابعة إلى لوحة التحكم</p>
                        <input type="email" placeholder="البريد الإلكتروني" style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            margin: '0.5rem 0', 
                            borderRadius: '0.5rem',
                            border: '1px solid #ddd'
                        }} />
                        <input type="password" placeholder="كلمة المرور" style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            margin: '0.5rem 0', 
                            borderRadius: '0.5rem',
                            border: '1px solid #ddd'
                        }} />
                        <button style={{ 
                            width: '100%', 
                            padding: '1rem', 
                            margin: '1rem 0', 
                            borderRadius: '0.5rem',
                            background: '#007bff',
                            color: 'white',
                            border: 'none'
                        }}>
                            تسجيل الدخول
                        </button>
                    </div>
                </Skeleton>
            </section>

            {/* Card Example */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Card Skeleton</h2>
                <Skeleton loading={loading} {...SkeletonConfigs.card}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ 
                            width: '48px', 
                            height: '48px', 
                            margin: '0 1rem 0 0', 
                            borderRadius: '50%',
                            background: '#ccc'
                        }}></div>
                        <div>
                            <h4>John Doe</h4>
                            <p>Software Developer</p>
                            <p>Building amazing web applications with React and TypeScript</p>
                        </div>
                    </div>
                </Skeleton>
            </section>

            {/* List Example */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>List Skeleton</h2>
                <Skeleton loading={loading} {...SkeletonConfigs.list}>
                    <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                    </ul>
                </Skeleton>
            </section>

            {/* Table Example */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Table Skeleton</h2>
                <Skeleton loading={loading} {...SkeletonConfigs.table}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Name</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Email</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>John Doe</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>john@example.com</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Admin</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Jane Smith</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>jane@example.com</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>User</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Bob Johnson</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>bob@example.com</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>User</td>
                            </tr>
                        </tbody>
                    </table>
                </Skeleton>
            </section>

            {/* Profile Example */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Profile Skeleton</h2>
                <Skeleton loading={loading} {...SkeletonConfigs.profile}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            width: '120px', 
                            height: '120px', 
                            margin: '0 auto 2rem auto', 
                            borderRadius: '50%',
                            background: '#ccc'
                        }}></div>
                        <h3>John Doe</h3>
                        <p>Senior Software Developer</p>
                        <p>10+ years of experience in web development</p>
                        <p>Specialized in React, TypeScript, and Node.js</p>
                        <p>Passionate about creating amazing user experiences</p>
                    </div>
                </Skeleton>
            </section>

            {/* Custom Configuration Example */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Custom Configuration</h2>
                <Skeleton 
                    loading={loading}
                    blocks={[
                        {
                            width: '100%',
                            height: '200px',
                            margin: '0 0 1rem 0',
                            borderRadius: '1rem',
                        },
                        {
                            lines: [
                                { width: '40%', height: '1.5rem', margin: '0 0 0.5rem 0' },
                                { width: '70%', height: '1rem', margin: '0 0 0.5rem 0' },
                                { width: '60%', height: '1rem', margin: '0 0 1rem 0' },
                            ],
                        },
                    ]}
                    layout="vertical"
                    animation="wave"
                >
                    <div style={{ 
                        width: '100%', 
                        height: '200px', 
                        margin: '0 0 1rem 0', 
                        borderRadius: '1rem',
                        background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem'
                    }}>
                        Custom Content Block
                    </div>
                    <h3>Custom Title</h3>
                    <p>This is a custom description with multiple lines of text.</p>
                    <p>Another line of content to demonstrate the skeleton loading effect.</p>
                </Skeleton>
            </section>

            {/* Grid Layout Example */}
            <section style={{ marginBottom: '3rem' }}>
                <h2>Grid Layout</h2>
                <Skeleton 
                    loading={loading}
                    blocks={Array(6).fill(null).map(() => ({
                        width: '200px',
                        height: '150px',
                        margin: '0.5rem',
                        borderRadius: '0.5rem',
                    }))}
                    layout="grid"
                    spacing="1rem"
                    animation="shimmer"
                >
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                        gap: '1rem' 
                    }}>
                        {Array(6).fill(null).map((_, index) => (
                            <div key={index} style={{ 
                                width: '200px', 
                                height: '150px', 
                                borderRadius: '0.5rem',
                                background: `linear-gradient(45deg, hsl(${index * 60}, 70%, 60%) 0%, hsl(${index * 60 + 30}, 70%, 50%) 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                Item {index + 1}
                            </div>
                        ))}
                    </div>
                </Skeleton>
            </section>
        </div>
    );
}
