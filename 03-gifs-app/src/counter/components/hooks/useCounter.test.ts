import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {

    test('should initalize with default value of 10', () => {
        const { result } = renderHook(() => useCounter())

        expect(result.current.counter).toBe(10)
    })

    test('should increment counter when handleAdd is called', () => {

        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleAdd()
        })

        expect(result.current.counter).toBe(11)


    })

    test('should subtratc counter when handleSubtract is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleSubtract()
        })

        expect(result.current.counter).toBe(9)
    })

    test('should reset counter when handleReset is called', () => {
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleReset()
        })

        expect(result.current.counter).toBe(10)

    })

})