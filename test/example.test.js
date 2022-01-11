// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderBunny } from '../render-utils.js';

const test = QUnit.test;

test('renderBunny is a function that will return a p tag with the class of bunny', async(expect) => {

    const bunny = {
        name: 'cutie',
        id: 1
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = '<p class="bunny">cutie</p>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = await renderBunny(bunny);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'returns .bunny p element');
});
