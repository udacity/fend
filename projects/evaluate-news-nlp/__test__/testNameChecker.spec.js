import { TestScheduler } from 'jest'
import {validURL} from '../src/client/js/nameChecker.js'


test('Check if entry is URL', () => {
    expect(validURL('https://udacity.com')).toBe(true);
});

test('Checking entry is not URL', () => {
    expect(validURL('no')).toBe(false)
});