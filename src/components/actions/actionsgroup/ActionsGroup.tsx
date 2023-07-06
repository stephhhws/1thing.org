import YourActionsLeft from "./YourActionsLeft";
import YourActionsRight from "./YourActionsRight";
import raiseAwarenessLeft from "../../../assets/take-action-page/raise-awareness-left.svg";
import raiseAwarenessRight from "../../../assets/take-action-page/raise-awareness-right.svg";
import supportVictim from "../../../assets/take-action-page/support-victim.svg";
import useSkillsRight from "../../../assets/take-action-page/use-skills-right.svg";
import useSkillsLeft from "../../../assets/take-action-page/use-skills-left.svg";
import promoteRight from "../../../assets/take-action-page/promote-right.svg";
import promoteLeft from "../../../assets/take-action-page/promote-left.svg";

const actionData: {
  name: string;
  desc: string[];
  actiontUrl: string;
  actionId: string;
  imgs: Array<any>;
}[] = [
  {
    name: "Raise awareness",
    desc: [
      "Tell a friend or colleague that you are concerned for your safety out in the streets nowadays because of Anti-Asian hate crime incidents.",
      "Talk about this issue with coworkers.",
      "In a team meeting, share what you are doing to fight hate.",
      "Share anti-hate materials to your team or organization.",
      "If you experienced a biased incident, tell your non-asian friends and colleagues about that. Share both facts and your feelings.",
      "Raise questions to the leaders of your organization, encourage concrete plans to address this issue.",
      "Inform your asian/non-asian friends about actions taken by governments and companies. Knowing that anti-Asian hate has drawn significant society-wise attention (not just among AAPI communities) will encourage everyone to do something.",
    ],
    actiontUrl: "/",
    actionId: "raiseAwareness",
    imgs: [raiseAwarenessLeft, raiseAwarenessRight],
  },
  {
    name: "Support Anti-Asian hate crime victims",
    desc: [
      "Donate to Anti-Asian hate crime victims.",
      "Help capture suspects.",
      "Help effort to bring justice to victims.",
      "Tell a hate incident/crime victim that you want to listen to their feelings.",
      "Tell a hate incident/crime victim that you are here to help.",
    ],
    actiontUrl: "/",
    actionId: "support",
    imgs: [supportVictim],
  },
  {
    name: "Use your skills",
    desc: [
      "Create: paint, draw, or digitally make a piece of art that reflects your attitude towards asian-hate, prejudice, and bias.",
      "Share: art, websites, or books that inspire and help you.",
      "Support: use your analytical skills to proofread articles, slide decks, and other educational content.",
      "Research: fact-check news articles, perform data analysis, or implement data crawling.",
      "Develop: create apps, websites, or online platforms.",
      "Collaborate: propose solutions, help with projects, or volunteer out in the community.",
    ],
    actiontUrl: "/",
    actionId: "useSkills",
    imgs: [useSkillsRight, useSkillsLeft],
  },
  {
    name: "Promote cross racial understanding",
    desc: [
      "Communicate: as a minority friend about their experience living in the US.",
      "Empathize: try to relate to others, share the challenges the APPI community is facing.",
      "Connect: host inclusive gatherings to connect with friends from different ethnic groups.",
      "Recommend: Asian storytelling movies. Eg: Crazy Rich Asians, The Joy Luck Club, to friends & colleagues.",
      "Invite: share something fun about Asian culture with non-Asian friends.",
    ],
    actiontUrl: "/",
    actionId: "understanding",
    imgs: [promoteRight, promoteLeft],
  },
];

function ActionsGroup() {
  return (
    <div id="action-section">
      <h3
        style={{
          marginTop: "96px",
          fontFamily: "Open Sans",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "0.4px",
        }}
      >
        {actionData[0].name}
      </h3>
      <YourActionsRight
        imgs={actionData[0].imgs[0]}
        desc={actionData[0].desc}
        actionId={actionData[0].actionId}
      />
      <h3
        style={{
          marginTop: "96px",
          fontFamily: "Open Sans",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "0.4px",
        }}
      >
        {actionData[1].name}
      </h3>
      <YourActionsLeft
        imgs={actionData[1].imgs[0]}
        desc={actionData[1].desc}
        actionId={actionData[1].actionId}
      />
      <h3
        style={{
          marginTop: "96px",
          fontFamily: "Open Sans",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "0.4px",
        }}
      >
        {actionData[2].name}
      </h3>
      <YourActionsRight
        imgs={actionData[2].imgs[1]}
        desc={actionData[2].desc}
        actionId={actionData[2].actionId}
      />
      <h3
        style={{
          marginTop: "96px",
          fontFamily: "Open Sans",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "40px",
          letterSpacing: "0.4px",
        }}
      >
        {actionData[3].name}
      </h3>
      <YourActionsLeft
        imgs={actionData[3].imgs[0]}
        desc={actionData[3].desc}
        actionId={actionData[3].actionId}
      />
    </div>
  );
}

export default ActionsGroup;
