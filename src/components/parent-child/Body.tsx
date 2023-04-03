import "./Body.css";
import BodyChild from "./BodyChild";

export default function Body() {
    return (
        <div className="whole-form">
            <div className="form-container">
                <h3>Create a burger!</h3>
                <section className="protein">
                    <label htmlFor="patty">What type of protein would you like?</label>
                    <input type="text" name="patty" id="patty" />
                </section>
                <hr />

                <section className="patties">
                    <label htmlFor="amount">How many patties would you like?</label>
                    <input type="number" name="amount" id="amount" />
                </section>
                <hr />

                <section className="cooked">
                    <label htmlFor="doneness">How do you want your patty cooked</label>
                    <br />
                    <span>Rare</span>
                    <input type="range" name="doneness" id="doneness" value="3" min="1" max="5" />
                    <span>Well-Done</span>
                </section>
                <hr />

                <section className="toppings">
                    <span>What toppings would you like?</span>
                    <br />
                    <input type="checkbox" name="topping" id="lettuce" value="lettuce" />
                    <label htmlFor="lettuce">Lettuce</label>
                    <input type="checkbox" name="topping" id="tomato" value="tomato" />
                    <label htmlFor="tomato">Tomato</label>
                    <input type="checkbox" name="topping" id="onion" value="onion" />
                    <label htmlFor="onion">Onion</label>
                </section>
                <hr />

                <section className="cheesy">
                    <span>Would you like to add cheese?</span>
                    <br />
                    <input type="radio" name="cheese" id="yes" value="yes" />
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" name="cheese" id="no" value="yes" />
                    <label htmlFor="no">No</label>
                </section>
                <hr />

                <section className="bun-type">
                    <label htmlFor="bun">What type of bun would you like?</label>
                    <select name="bun" id="bun">
                        <option value="sesame">Sesame</option>
                        <option value="potatoe">Potato</option>
                        <option value="pretzel">Pretzel</option>
                    </select>
                </section>
                <hr />

                <section className="sauce-selection">
                    <label htmlFor="sauce">What type of sauce would you like?</label>
                    <input list="sauces" id="sauce" name="sauce" />
                    <datalist id="sauces">
                        <option value="ketchup"></option>
                        <option value="mayo"></option>
                        <option value="mustard"></option>
                    </datalist>
                </section>
                <hr />
                <section className="extra-info">
                    <label htmlFor="extra">Anything else you want to add?</label>
                    <br />
                    <textarea id="extra" name="extra" rows={3} cols={40}></textarea>
                </section>
                <hr />

                <section className="submission">
                    <input type="submit" value="Submit" />
                </section>
            </div>
            <BodyChild/>
        </div>
    );
}