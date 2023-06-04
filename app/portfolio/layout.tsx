export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p className="text-4xl font-bold text-green-700 my-6">Our Portfolio</p>
            {children}
        </div>
    )
}