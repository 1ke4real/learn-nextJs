import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-row min-h-screen">
            <SideNav/>
            <div className="flex flex-col flex-1">
                <main className="flex-1 p-3 overflow-hidden">{children}</main>
            </div>
        </div>
    )
}