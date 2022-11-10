import React from "react";
import { render, fireEvent } from '@testing-library/react';
import CoinContainer from "./CoinContainer";

beforeEach(function() {
    jest
      .spyOn(Math, "random")
      .mockReturnValueOnce(0.25)
      .mockReturnValueOnce(0.75);
  });

// SmokeTest
    it ('should render',() => {
        render(<CoinContainer />)
    });

// SnapshoTest
    it ('should match Snapshot',() => {
        const { asFragment } = render (<CoinContainer />)
        expect(asFragment()).toMatchSnapshot();
    });

// Doesnt show a Coin on PageLoad
    it("doesn't show a coin on page load", function() {
        const { queryByTestId } = render(<CoinContainer />);
      
        expect(queryByTestId("coin")).toBeNull();
      });
// Counts correctly when Head appears
    it ('counts correctly when Head appears',() => {
        const { getByText, queryByAltText } = render(<CoinContainer />)
        const btn = getByText('Flip ME')
        fireEvent.click(btn)

        expect(queryByAltText("Heads")).toBeInTheDocument()
        expect(queryByAltText("Tails")).not.toBeInTheDocument()
    })
// Counts correctly when Tail appears
    it ('counts correctly when Tail appears',() => {
        const { getByText, queryByAltText} = render(<CoinContainer />)
        const btn = getByText("Flip ME")
        fireEvent.click(btn)
        fireEvent.click(btn)

        expect(queryByAltText("Tails")).toBeInTheDocument()
        expect(queryByAltText("Heads")).not.toBeInTheDocument()
    })

    afterEach(function() {
        Math.random.mockRestore();
      });