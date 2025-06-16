import Link from 'next/link';

export default function Navbar():React.JSX.Element{
    return (
        <nav>
            <div className = "AI-assistant">
                <Link href= "/AI_page">
                    AI-assistant
                </Link>
            </div>
            <div className = "Market-analysis">
                <Link href="/Market_analysis">
                    Market-analysis
                </Link>
            </div>
            <div className = "News">
                <Link href="/News">
                    News and Alert
                </Link>
            </div>
            <div className = "Learning-Hub">
                <Link href="/Learning-Hub">
                    Learning Hub
                </Link>
            </div>
        </nav>
    );
}