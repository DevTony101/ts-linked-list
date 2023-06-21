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
    const data = 5;
    const list = new LinkedList<any>([1,2,3,4]);

    // When
    list.append(data);

    // Then
    expect(list.get(list.getSize() - 1).data).toBe(data);
  });

  test('it should insert at a random position', () => {
    // Given
    const initialData = [1,2,3,4,5];
    const data = 6;
    const list = new LinkedList<any>(initialData);

    // When
    const randomIndex = Math.floor(Math.random() * (initialData.length - 1));
    list.appendAt(data, randomIndex);

    // Then
    expect(list.get(randomIndex).data).toBe(data);
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