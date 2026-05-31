export interface Product {
  id: number
  name: string
  description: string | null
  price: number
  stock: number
  imageUrl: string | null
  createdAt?: string
}

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}
