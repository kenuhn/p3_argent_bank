import React from "react";
import Hero from "../Components/Hero/Hero";
import Card from "../Components/Card/Card";
import iconChat from "../img/icon-chat.png"
import iconMoney from "../img/icon-money.png"
import iconSecurity from "../img/icon-security.png"
const Accueil = () => {
  return (
    <main>
    <Hero /> 
      <section className="features">
        <Card icon={iconChat} title="You are our #1 priority" text={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}/>
        <Card icon={iconMoney} title="More savings means higher rates" text={"The more you save with us, the higher your interest rate will be! "}/>
        <Card icon={iconSecurity} title="Security you can trust" text={" We use top of the line encryption to make sure your data and money is always safe. "}/>
      </section>
    </main>
  );
};

export default Accueil;
