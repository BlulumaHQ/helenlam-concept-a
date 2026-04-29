import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Helen Lam - Personal Real Estate Corp." },
      { name: "description", content: "Work with Helen Lam — a trusted real estate professional delivering proven marketing, sharp negotiation, and personalized service from search to sold." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Helen Lam - Personal Real Estate Corp." },
      { property: "og:description", content: "Work with Helen Lam — a trusted real estate professional delivering proven marketing, sharp negotiation, and personalized service from search to sold." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Helen Lam - Personal Real Estate Corp." },
      { name: "twitter:description", content: "Work with Helen Lam — a trusted real estate professional delivering proven marketing, sharp negotiation, and personalized service from search to sold." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5c127deb-f80d-45c9-9d4c-ad3b7d4076df/id-preview-0d74f0d1--2a2216a9-46a4-4c50-ba0a-687891e3f032.lovable.app-1777419938055.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5c127deb-f80d-45c9-9d4c-ad3b7d4076df/id-preview-0d74f0d1--2a2216a9-46a4-4c50-ba0a-687891e3f032.lovable.app-1777419938055.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}
