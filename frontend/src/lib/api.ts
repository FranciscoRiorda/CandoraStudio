import axios from 'axios'
import type { Product } from '@/types/product'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export async function fetchProducts(): Promise<Product[]> {
  const { data } = await api.get<Product[]>('/products')
  return data
}
