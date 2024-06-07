export default class Greeting {
  // Store already greeted names and greeting counter
  private alreadyGreeted: { [name: string]: boolean } = {};
  private greetingsCounter = 0;

  // Constructor
  constructor() {}

  // Function to validate and transform input string
  public inputString(name: string): string {
    const regex = /^[a-zA-Z]+$/i;
    return typeof name === 'string' && name.trim() !== '' && regex.test(name.trim()) ? name.toLowerCase() : '';
  }

  // Function to check if a name has already been greeted
  public greetedFunction(name: string): boolean {
    const transformedName = this.inputString(name);
    if (!this.alreadyGreeted[transformedName]) {
      this.alreadyGreeted[transformedName] = true;
      this.greetingsCounter++;
      return false;
    }
    return true;
  }

  // Function to greet a name in a specific language
  public greetFunction(name: string, language: string): string {
    const transformedName = this.inputString(name);
    if (language === 'Swati') {
      return 'Sawubona ' + transformedName;
    } else if (language === 'English') {
      return 'Hello ' + transformedName;
    } else if (language === 'Sotho') {
      return 'Dumela ' + transformedName;
    }
    else{
      return ""
    }
  }

  // Function to get the greeting counter
  public getCounter(): number {
    return this.greetingsCounter;
  }

  // Function to reset the greeting counter and already greeted names
  public reset(): void {
    this.greetingsCounter = 0;
    this.alreadyGreeted = {};
  }
}