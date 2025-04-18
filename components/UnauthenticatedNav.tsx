import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Button } from './ui/button';

const UnauthenticatedNav = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale });
  return (
    <nav className="flex items-center gap-2">
      <Button variant="ghost" asChild>
        <Link href={`/${locale}/sign-in`}>{t('nav.signIn')}</Link>
      </Button>
      <Button asChild>
        <Link href={`/${locale}/sign-up`}>{t('nav.signUp')}</Link>
      </Button>
    </nav>
  );
};

export default UnauthenticatedNav;
