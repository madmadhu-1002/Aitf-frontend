import AccessoryDesc from '@/components/AccessoryDesc'

export async function generateMetadata({ params }) {
  const { slug } = params;

  return {
    title: ` Accessories | ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
  };
}

const page = () => {
  return (
    <>
    <AccessoryDesc />
    </>
  )
}

export default page