const ProductCard = () => {
  const [product, productAdded, recommendationAdded] = useUnit([
    productModel.$product,
    productModel.productAdded,
    productModel.recommendationAdded,
  ]);

  return (
    <div>
      <div>
        {
          product.basketStatus.isInBasket
            ? <button
              onClick={() => productAdded(product.id)}
            >
              купить
            </button>
            : product.basketStatus.count
        }
      </div>


      {
        product.recommendations.map((recommendation) => (
          <div>
            {
              recommendation.isInBasket
                ? <button
                  onClick={() => recommendationAdded(recommendation.id)}
                >
                  купить
                </button>
                : <icon/>
            }
          </div>
        ))
      }
    </div>
  )
}
