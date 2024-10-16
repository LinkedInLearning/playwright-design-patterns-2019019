import { test as base } from '@playwright/test'

let counter = 0

const test = base.extend({
	counterFixture: [async ({ }, use) => {
		counter++
		await use(counter)
	},
	{scope: 'test'}]
})

test("Test 1", async ({ counterFixture }) => {
	console.log(`Test 1 Counter: ${counterFixture}`);
});

test("Test 2", async ({ counterFixture }) => {
	console.log(`Test 2 Counter: ${counterFixture}`);
});

test("Test 3", async ({ counterFixture }) => {
	console.log(`Test 3 Counter: ${counterFixture}`);
});