export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.firstName : '';
    this.email = obj ? obj.email : '';
    this.birthDate = obj ? obj.firstName : '';
    this.street = obj ? obj.firstName : '';
    this.zipCode = obj ? obj.firstName : '';
    this.city = obj ? obj.firstName : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
