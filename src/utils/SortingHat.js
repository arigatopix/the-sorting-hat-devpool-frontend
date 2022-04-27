class SortingHat {
  constructor(name) {
    this.name = name;
    this.houses = [
      {
        name: 'Gryffindor',
        population: 12,
      },
      {
        name: 'Hufflepuff',
        population: 1,
      },
      {
        name: 'Ravenclaw',
        population: 8,
      },
      {
        name: 'Slytherin',
        population: 4,
      },
    ];
  }

  show() {
    console.log(this.houses);
  }

  // clear
  clear() {
    this.houses.map(el => (el.population = 0));
  }

  random() {
    let num = this.houses.length;

    const total = this.houses
      .map(el => el.population)
      .reduce((acc, cur) => acc + cur);

    if (total > 50) {
      throw new Error('Maximum People at 50');
    }

    // ให้คิดว่า mean เท่าไหร่
    const mean = Math.floor(total / num);
    // ใครอยู่ต่ำกว่ามีนให้ยังอยุ่

    // filter มากกว่ามีนออกไป เหลือต่ำกว่า แล้วให้ random แข่งกัน
    const remainHouse = this.houses.filter(el => {
      return el.population < mean;
    });

    // random และ return บ้าน
    return remainHouse[Math.floor(Math.random() * remainHouse.length)];
  }

  add(name) {
    // รับบ้านจาก random
    const randomHouse = this.random();

    // update ใน database ให้เพิ่มสมาชิกไปในบ้านอีก1
    let objIndex = this.houses.findIndex(el => el.name === randomHouse.name);
    this.houses[objIndex].population = this.houses[objIndex].population + 1;

    // TODO update ใน localStorage

    return {
      magicianName: name,
      housename: randomHouse.name,
    };
  }
}

export default SortingHat;
