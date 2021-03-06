import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  acceptTOSHeading: FormattedMessage.MessageDescriptor;
  acceptTOSTitle: FormattedMessage.MessageDescriptor;
  acceptTOSText: FormattedMessage.MessageDescriptor;
  acceptTOSAgreeLabel: FormattedMessage.MessageDescriptor;
  acceptTOSAgeLabel: FormattedMessage.MessageDescriptor;
  acceptTOSButton: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  acceptTOSHeading: {
    defaultMessage: 'Terms of service',
    id: 'acceptTOSHeading',
  },
  acceptTOSTitle: {
    defaultMessage: 'Whereas:',
    id: 'acceptTOSTitle',
  },
  acceptTOSText: {
    defaultMessage: `
    <h4>Terms and Conditions for play.gn.org</h4>
        <p>
          1. The following terms and conditions (hereinafter “<b>Agreement</b>” or “<b>Terms and Conditions</b>”) are
          meant to regulate the relations between DA Creation Pte. Ltd., 176 Joo Chiat Road, #02-02, Singapore 427447
          (The “<b>Company</b>”) and its customers (hereinafter “<b>Users</b>” or “<b>You</b>”) in relation to the
          online skill based games provided on play.gn.org (hereinafter “<b>the Service</b>”).
          </br></br>
          You are able to use the Service only if you have registered your personal account on account.gn.org
          (“<b>Platform Account</b>”). Once Your account is active and you start to use the Service you agree to this
          Agreement. If you do not agree to be bound by this Agreement, do not use the Service.
          </br></br>
          You may not use the Services unless you are at least 16 years of age.
          </br></br>
          2. By using the Service you are provided with the possibility to play various games and to participate in
          tournaments with other Users. There are two types of games that you can play on play.gn.org. First type are
          head-to-head games, where you will compete against one User, and the second type of games are multi-player
          games, where you are competing against two or more other users (collectively referred as to the “<b>Games</b>”). The
          Games are skill-based and there is no chance element to them. Therefore, when playing a head-to-head game or
          participating in a tournament with other Users it is your skill in playing a certain game that is evaluated
          against other Users, and the winner will be the User who, through skill, scores the most points in the
          relevant game. You should get acquainted with each game, by reading the rules and instructions before you
          play.
          </br></br>
          3. Majority of the Games are entrance-free games. To be able to play these Games you are not obliged to pay
          the entrance fee and in case of certain types of Games (e.g. leaderboard tournaments), you will receive a
          reward in case you win.
          </br></br>
          4. The entrance fee for playing of certain Games is expressed exclusively in GN Gold (the “<b>Gold</b>”). In case of
          head-to-head games, the users determine the entrance fee by themselves, whilst in case of multi-player games
          (i.e. tournaments) the entrance fee is prescribed in advance and shall be presented at the beginning of each
          tournament. <i>For more information on the Gold, please read once more the Terms and Conditions for our GNation
          platform, which were presented to you during the opening of the Platform Account.</i>
          </br></br>
          5. In case you win the Game with prescribed entrance fee or certain entrance-free Game, you will receive a
          reward. In case of head-to-head game, the reward will depend on the entry fee that is set between the users.
          In case of multi-player tournament, the reward is prescribed in advance and shall be presented at the
          beginning of each tournament.
          </br></br>
          6. The rewards for winning the head-to-head games are expressed only in Gold, whilst the rewards for wining a
          tournament can be expressed either in Gold or in MGO token.
          </br></br>
          7. In case you win a reward in Gold, the number of received Gold shall be recorded on your Platform Account
          and you can use them for any Platform Service and eventually outside the Platform.
          </br></br>
          8. In case a reward is expressed in <u>MGO token</u>, right after the tournament is finished and you are declared as
          winner, you will be asked to provide us with the address of your e-wallet so that we can transfer your reward
          to you. In case we do not receive any information from you in deadline of 5 days, you will lose your right
          to reward. For the avoidance of any doubt, you cannot use MGO token as entrance fee nor for any other purpose
          inside GNation platform, at this moment. MGO token is a virtual currency that you can exchange on the
          following virtual currency exchange platforms: IDAX, Bitforex, Coinrail, Bitfinex, BCEX, Digifinex, Liquid, Tidex, Waves, Gatecoin, Ethfinex, Cryptopia, Qryptos, HitBTC
          </br></br>
          9. We may monitor the location from which you appear to access the Service and may block you to access the
          Service from any location in which use of the Service may be illegal or restricted as we may determine in our
          sole and absolute discretion from time to time. Accordingly, we may require a User receiving a prize to
          provide proof that he or she is eligible to participate and if we determine in our sole and absolute
          discretion that you are not eligible, we may refuse to award the prize. You must comply with the laws which
          apply to you in the location you access the play.gn.org from. If any laws applicable to you restrict or
          prohibit your participation in the games, then you must comply with those legal restrictions.
          </br></br>
          10. We have the right to withdraw or modify one or more Games or aspects of the Games where we have legal or
          technical reasons to do so, including (a) privacy, data protection or other legal objections to the content
          or conduct of the Games, and (b) technical difficulties experienced by us or on the Internet. There may also
          be times when the Games become unavailable, whether on a scheduled or unscheduled basis.
          </br></br>
          11. You may use the Service offered on it only for lawful, personal, non-commercial purposes. You agree not
          to upload, post, email, transmit or otherwise make available any content that is unlawful, harmful,
          threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libellous, invasive of another's
          privacy, hateful, or racially, ethnically or otherwise objectionable.
          </br></br>
          Users cannot use unfair methods to play the Games. Any technique which allows you to use anything other than
          pure skill in the conduct of a Game is unfair for these purposes. Such techniques may include, but are not
          limited to, multiple Platform Accounts, the use of program codes or commands or any adapted hardware or
          software to assist play, the impersonation of another Member, or deliberately losing Games for the purpose of
          getting a competitive advantage.
          </br></br>
          In case you notice any actions of other users that are in contrary to provisions of this Agreement, please
          contact us to inform us of it by sending is e-mail on <b>support@gn.org</b>.
          </br></br>
          12. The Company can terminate User’s access to the Service or refuse to award the prize in case if the User
          breaches any provision of this Agreement.
          </br></br>
          13. All of the content and information contained in the Service are owned or licensed by the Company and are
          protected by intellectual property rights. You are granted with a limited license to access and use the Games
          subject to this Agreement. However, this license does not allow you to make any commercial use or and
          derivative use of the Games.
          </br></br>
          14. To the fullest extent permissible under applicable law, you expressly agree that the use of the Service
          is at your sole risk and that the entire risk as to satisfactory quality, performance, accuracy and effort is
          with you. To the maximum extent permitted by applicable law, all materials and Games are provided on an "as
          is " basis with all faults and without warranty of any kind, and the Company hereby disclaims all warranties
          and conditions with respect to the Games, either express or implied, including, but not limited to, the
          implied warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of
          accuracy, of quiet enjoyment, and non-infringement of third party rights. Without limiting the foregoing, we
          make no warranty that the Games will: (i) meet your requirements, (ii) be uninterrupted, timely, secure, or
          error-free, (iii) will be interoperable or compatible with other software, or (iv) the results that may be
          obtained from the use of the Games will be effective, accurate or reliable. At some point in the future, the
          Games may go out of date, and the Company has no commitment to update them. The disclaimers of liability
          contained in this section apply to any damages or injury caused by any failure of performance, error,
          omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication
          line failure, theft or destruction or unauthorized access to, alteration of, or use of the Services, whether
          for breach of contract, tortious behavior, negligence, or under any other cause of action. The use of the
          Service is done at your own discretion and risk and with your agreement that you will be solely responsible
          for any damage to your computer system or loss of data that results from such activities. The Games,
          information and related graphics published as part of the Game may include technical inaccuracies or
          typographical errors. You understand and agree that temporary interruptions of the Games may occur as normal
          events. You acknowledge and agree that your exclusive remedy for any dispute with us is to stop using the
          Service. Under no circumstances will the Company be liable to you for any damages whatsoever, including but
          not limited to any loss of profits, interruption to business, loss of information or any other incidental or
          consequential damages arising out of the usage of the Service. In jurisdictions that do not allow the
          exclusion or the limitation of liability for consequential or incidental damages, the liability of the
          Company shall be limited fully permitted by law.
          </br></br>
          15. For all the questions that are not regulated by this Agreement the provisions of the Terms and Conditions
          for GNation platform shall apply.
        </p>
      `,
    id: 'acceptTOSText',
  },
  acceptTOSAgreeLabel: {
    defaultMessage: 'I agree with these terms',
    id: 'acceptTOSAgreeLabel',
  },
  acceptTOSAgeLabel: {
    defaultMessage: 'I confirm that I am 16 years old or over',
    id: 'acceptTOSAgeLabel',
  },
  acceptTOSButton: {
    defaultMessage: 'Continue',
    id: 'acceptTOSButton',
  },
});
