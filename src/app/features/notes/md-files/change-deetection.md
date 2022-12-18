# Change Detection

changeDetection: `ChangeDetectionStrategy.OnPush,`

Rules for using onPush change detection <sup>10</sup>
* Can be applied to child component when it does not change any internal data <sup>10</sup>
    * Use @Input and @Output to pass data and events to & from child w/ onPush CD Strategy <sup>10</sup>
    * Use state management which uses immutable data <sup>10</sup>
* Pass only immutable data to child component with onPush CD strategy <sup>10</sup>
    * instead of `this.roomlist.push(room)`
      use `this.roomlist = [ ...this.roomlist, room ]`













## References

[10] https://youtu.be/3qBXWUpoPHo?t=18908 (Change Detection - part of "Angular for Beginners Course [Full Front End Tutorial with TypeScript]" by Santosh)