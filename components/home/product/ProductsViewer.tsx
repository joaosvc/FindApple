import Product from './Product'

const ProductsViewer = () => {
  const products: any = [
    {
      name: 'Macbook',
      type: 'macbook',
      icon: 'macbook.png'
    },
    {
      name: 'iPhone',
      type: 'iphone',
      icon: 'iphone.png'
    },
    {
      name: 'iPad',
      type: 'ipad',
      icon: 'ipad.png'
    },
    {
      name: 'Apple Watch',
      type: 'apple-watch',
      icon: 'apple-watch.png'
    },
    {
      name: 'AirPods',
      type: 'air-pods',
      icon: 'air-pods.png'
    },
    {
      name: 'AirTag',
      type: 'air-tag',
      icon: 'air-tag.png'
    },
    {
      name: 'Acessórios',
      type: 'accessories',
      icon: 'accessories.png'
    }
  ]

  return (
    <div className="max-h-96 grid grid-flow-row grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 space-y-2 lg:space-x-7">
      {products.map((product: any, key: number) => (
        <Product key={key} name={product.name} icon={product.icon} type={product.type} />
      ))}
    </div>
  )
}

export default ProductsViewer
