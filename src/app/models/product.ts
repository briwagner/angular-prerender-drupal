export class Product {
  title: string
  body: string
  features: Array<string>
  featuresRendered: string
  image: Object

  constructor(data) {
    this.title = data.title
    this.body = data.body,
    this.features = data.features
    this.featuresRendered = data.featuresRendered
    this.image = data.image
  }
}