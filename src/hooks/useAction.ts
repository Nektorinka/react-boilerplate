import { useDispatch } from 'react-redux'
import FunctionType from '../models/FunctionType'
import { useCallback } from 'react'

const useAction = <T extends FunctionType>(actionCreator: T) => {
  const dispatch = useDispatch()

  return useCallback(
    (...args: Parameters<T>) => {
      dispatch(actionCreator(...args))
    },
    [dispatch, actionCreator],
  )
}

export default useAction
