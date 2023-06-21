import { LinkedList } from "../src/classes/linked-list";

describe('Testing insertion of objects', () => {
  test('it should insert at the head of the list', () => {
    // Given
    const data = 0;
    const list = new LinkedList<any>();

    // When
    list.prepend(data);

    // Then
    expect(list.getSize()).toBeGreaterThan(0);
    expect(list.get(0)).not.toBeNull();
  });

  test('it should insert at the end of the list', () => {
    // Given
    const data = 0;
    const list = new LinkedList<any>();

    // When
    list.prepend(data);

    // Then
    expect(list.getSize()).toBeGreaterThan(0);
    expect(list.get(0)).not.toBeNull();
  });
});

describe('Testing removal of objects', () => {
  test('true should be true', () => {
    expect(true).toBe(true);
  });
});

describe('Testing edits of objects', () => {
  test('true should be true', () => {
    expect(true).toBe(true);
  });
});

describe('Testing retrieval of objects', () => {
  test('true should be true', () => {
    expect(true).toBe(true);
  });
});