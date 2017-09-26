
/**
 * Code to support DCS102 at Bates College.
 * MIT License
 * Copyright 2017 Matt Jadud <mjadud@bates.edu>
 */
//% weight=100 color=#881127 icon="\uf1b0"
namespace DCS {
    /**
     * Returns the integer quotient of dividing one number by another.
     * Example: quotient(10, 3) will be 3, because 10/3 => _3_R1.
     *
     * @param divisor The number we are dividing.
     * @param dividend The number we dividing by.
     */
    //% blockId=dcs_quotient
    //% block="quotient of %divisor|by %dividend"
    export function quotient(divisor: number, dividend: number): number {
        return divisor / dividend;
    }

    /**
     * Returns the integer remainder of dividing one number by another.
     * Example: remainder(10, 3) will be 1, because 10/3 => 3R_1_.
     *
     * Violates the strict definition of "remainder" by returning the
     * dividend when the divisor is zero.
     *
     * @param divisor The number we are dividing.
     *
     * @param dividend The number we dividing by.
     */
    //% blockId=dcs_remainder
    //% block="remainder of %divisor|by %dividend"
    export function remainder (divisor: number, dividend: number): number {
        if (divisor == 0) {
            return dividend;
        } else {
            return divisor % dividend;
        }
    }

    /**
     * Returns true if a number is even.
     * Example: is_even(8) will be true.
     *
     * @param n The number we are checking for evenness.
     */
    //% blockId=dcs_is_even
    //% block="is %n| even"
    export function is_even(n: number): boolean {
        return ((n % 2) == 0);
    }

    /**
     * Returns true if a number is odd.
     * Example: is_odd(8) will be false.
     *
     * @param n The number we are checking for oddness.
     */
    //% blockId=dcs_is_odd
    //% block="is %n| odd"
    export function is_odd(n: number): boolean {
        return ((n % 2) == 1);
    }
}