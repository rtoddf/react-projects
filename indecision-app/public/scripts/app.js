"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "getGreeting",
        value: function getGreeting() {
            return "Hi, my name is " + this.name + ".";
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return this.name + " is " + this.age + " year(s) old.";
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: "hasMajor",
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getDescription", this).call(this);
            if (this.hasMajor()) {
                description += ". Their major is " + this.major + ".";
            }

            return description;
        }
    }]);

    return Student;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLoaction) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLoaction = homeLoaction;
        return _this2;
    }

    _createClass(Traveler, [{
        key: "hasHomeLocation",
        value: function hasHomeLocation() {
            return !!this.homeLoaction;
        }
    }, {
        key: "getGreeting",
        value: function getGreeting() {
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "getGreeting", this).call(this);
            if (this.hasHomeLocation()) {
                greeting += " I am from " + this.homeLoaction + ".";
            }
            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Person("Todd", 51);
var other = new Person();

var him = new Student("Larry", 54, "Drama");
var otherHim = new Student();

var bob = new Traveler("Bob", 46, "Los Angeles");
var susan = new Traveler();

console.log(him.getDescription());
console.log(otherHim.getDescription());
console.log(bob.getGreeting());
console.log(susan.getGreeting());

// console.log(me.getDescription())
// console.log(other.getDescription())

// https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7707676?start=0 at 10:45
