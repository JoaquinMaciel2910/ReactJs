import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {

        render(<MyAwesomeApp />)

        screen.debug()

        const h1 = screen.getByRole('heading', { level: 1 })

    })
})