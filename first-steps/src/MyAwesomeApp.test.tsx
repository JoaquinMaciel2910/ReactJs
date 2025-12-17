import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {

        render(<MyAwesomeApp />)

        screen.debug()

        const h1 = screen.getByRole('heading', { level: 1 })

    });

    test('should match increase count when +1 button is pressed'), () => {
        render(<ItemCounter name {'Test item'} quantity={1})
        const buttons = screen.getAllByRole('button');
        console.log(buttonAdd.innerHTML);
    }
})