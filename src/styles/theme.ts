export const theme = {
    colors: {
        background: {
            primary: '#0D0D0D',
            card: '#1C1C1E',
            input: '#2C2C2E',
        },
        accent: {
            primary: '#DC143C',   // алый
            secondary: '#C5A059', // золото
        },
        text: {
            primary: '#F5F5F7',
            secondary: '#98989D',
            inverse: '#0D0D0D',
        },
        status: {
            success: '#30D158',
            error: '#FF453A',
            warning: '#FF9F0A',
        },
        glass: {
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'rgba(255, 255, 255, 0.1)',
        },
    },
    fonts: {
        heading: "'Manrope', sans-serif",
        body: "'Inter', sans-serif",
        japanese: "'Noto Serif JP', serif",
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    transitions: {
        default: '0.3s ease',
        slow: '0.5s ease',
        fast: '0.15s ease',
    },
    shadows: {
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
        hover: '0 12px 48px rgba(0, 0, 0, 0.6)',
        glow: '0 0 20px rgba(220, 20, 60, 0.3)',
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
    },
};