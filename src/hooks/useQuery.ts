import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

const useQuery = <T>(): T => {
  const { search } = useLocation()
  return (queryString.parse(search) as unknown) as T
}

export default useQuery
