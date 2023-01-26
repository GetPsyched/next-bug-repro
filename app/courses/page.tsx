function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// If this function is removed, then the loading component will render properly
export async function generateStaticParams() {
    await delay(1000);
    return [{ code: '1' }, { code: '2' }, { code: '3' }];
  }
  
export default async function CoursesPage() {
  await delay(1000);
  return (
    <p>Loading component did NOT display while routing to this page.</p>
  );
}
