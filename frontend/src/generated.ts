// Generated by @wagmi/cli@0.1.14 on 8/15/2023 at 10:46:48 AM
import {
  useContract,
  UseContractConfig,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Storage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const storageABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'retrieve',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'num', internalType: 'uint256', type: 'uint256' }],
    name: 'store',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContract}__ with `abi` set to __{@link storageABI}__.
 */
export function useStorage(config: Omit<UseContractConfig, 'abi'> = {} as any) {
  return useContract({ abi: storageABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link storageABI}__.
 */
export function useStorageRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof storageABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof storageABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: storageABI,
    ...config,
  } as UseContractReadConfig<typeof storageABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link storageABI}__ and `functionName` set to `"retrieve"`.
 */
export function useStorageRetrieve<
  TSelectData = ReadContractResult<typeof storageABI, 'retrieve'>,
>(
  config: Omit<
    UseContractReadConfig<typeof storageABI, 'retrieve', TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: storageABI,
    functionName: 'retrieve',
    ...config,
  } as UseContractReadConfig<typeof storageABI, 'retrieve', TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link storageABI}__.
 */
export function useStorageWrite<
  TMode extends WriteContractMode,
  TFunctionName extends string,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof storageABI, string>['abi'],
        TFunctionName
      >
    : UseContractWriteConfig<TMode, typeof storageABI, TFunctionName> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<TMode, typeof storageABI, TFunctionName>({
    abi: storageABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link storageABI}__ and `functionName` set to `"store"`.
 */
export function useStorageStore<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof storageABI, 'store'>['abi'],
        'store'
      > & { functionName?: 'store' }
    : UseContractWriteConfig<TMode, typeof storageABI, 'store'> & {
        abi?: never
        functionName?: 'store'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof storageABI, 'store'>({
    abi: storageABI,
    functionName: 'store',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link storageABI}__.
 */
export function usePrepareStorageWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof storageABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: storageABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof storageABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link storageABI}__ and `functionName` set to `"store"`.
 */
export function usePrepareStorageStore(
  config: Omit<
    UsePrepareContractWriteConfig<typeof storageABI, 'store'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: storageABI,
    functionName: 'store',
    ...config,
  } as UsePrepareContractWriteConfig<typeof storageABI, 'store'>)
}
