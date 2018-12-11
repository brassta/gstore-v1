import { State } from './state';

import * as fromUI from './ui/selectors';
import * as fromBalance from './balance/selectors';
import * as fromCompetition from './competition/selectors';
import * as fromDashboard from './dashboard/selectors';
import * as fromProfile from './profile/selectors';
import * as fromDoGood from './do-good/selectors';
import * as fromGnStore from './gn-store/selectors';


// ui
export const isNavigationSidebarOpen = ({ ui }: State) =>
  fromUI.isNavigationSidebarOpen(ui);
export const isAccountSettingsPanelOpen = ({ ui }: State) =>
  fromUI.isAccountSettingsPanelOpen(ui);
export const getModalMetadata = ({ ui }: State) => fromUI.getModalMetadata(ui);

// balance
export const getGoldBalance = ({ balance }: State) =>
  fromBalance.getGoldBalance(balance);
export const isGoldBalanceInProgress = ({ balance }: State) =>
  fromBalance.isGoldBalanceInProgress(balance);
export const getGoldAccountId = ({ balance }: State) =>
  fromBalance.getGoldAccountId(balance);

//gnstore
export const getCurrentProductMap = ({product}:State) =>{
    fromGnStore.GetCurrentProductMap(product);
}

// competition
export const getCurrentCompetitionsMap = ({ competition }: State) =>
  fromCompetition.getCurrentCompetitionsMap(competition);
export const getCurrentCompetitions = ({ competition }: State) =>
  fromCompetition.getCurrentCompetitions(competition);
export const getCurrentFeaturedCompetitions = ({ competition }: State) =>
  fromCompetition.getCurrentFeaturedCompetitions(competition);
export const getCurrentNonFeaturedCompetitions = ({ competition }: State) =>
  fromCompetition.getCurrentNonFeaturedCompetitions(competition);
export const isCurrentCompetitionsInProgress = ({ competition }: State) =>
  fromCompetition.isCurrentCompetitionsInProgress(competition);
export const getPastCompetitions = ({ competition }: State) =>
  fromCompetition.getPastCompetitions(competition);
export const isPastCompetitionsInProgress = ({ competition }: State) =>
  fromCompetition.isPastCompetitionsInProgress(competition);
export const getRewards = ({ competition }: State) =>
  fromCompetition.getRewards(competition);
export const isRewardsInProgress = ({ competition }: State) =>
  fromCompetition.isRewardsInProgress(competition);
export const isFetchCompetitionInProgress = ({ competition }: State) =>
  fromCompetition.isFetchCompetitionInProgress(competition);
export const getSelectedCompetition = ({ competition }: State) =>
  fromCompetition.getSelectedCompetition(competition);
export const getSelectedCompetitionPrizes = ({ competition }: State) =>
  fromCompetition.getSelectedCompetitionPrizes(competition);
export const getParticipants = ({ competition }: State) =>
  fromCompetition.getParticipants(competition);
export const isParticipantsInProgress = ({ competition }: State) =>
  fromCompetition.isParticipantsInProgress(competition);
export const hasUserJoined = ({ competition }: State) =>
  fromCompetition.hasUserJoined(competition);
export const isGamePlayable = ({ competition }: State) =>
  fromCompetition.isGamePlayable(competition);
export const isJoinCompetitionInProgress = ({ competition }: State) =>
  fromCompetition.isJoinCompetitionInProgress(competition);
export const isJoinCompetitionError = ({ competition }: State) =>
  fromCompetition.isJoinCompetitionError(competition);
export const isClaimRewardInProgress = ({ competition }: State) =>
  fromCompetition.isClaimRewardInProgress(competition);
export const isClaimRewardError = ({ competition }: State) =>
  fromCompetition.isClaimRewardError(competition);
export const getSelectedCompetitionId = ({ competition }: State) =>
  fromCompetition.getSelectedCompetitionId(competition);

// dashboard
export const getFeedItems = ({ dashboard }: State) =>
  fromDashboard.getFeedItems(dashboard);
export const isFetchFeedInProgress = ({ dashboard }: State) =>
  fromDashboard.isFetchFeedInProgress(dashboard);

// profile
export const getUserProfile = ({ profile }: State) =>
  fromProfile.getUserProfile(profile);
export const isUserProfileInProgress = ({ profile }: State) =>
  fromProfile.isUserProfileInProgress(profile);
export const isUploadImageInProgress = ({ profile }: State) =>
  fromProfile.isUploadImageInProgress(profile);

// Do Good
// TODO@martins add reselect
export const getHumanitarianProjects = ({ doGood: { projects } }: State) =>
  fromDoGood.getHumanitarianProjects(projects);
export const isFetchProjectsInProgress = ({ doGood: { projects } }: State) =>
  fromDoGood.isFetchProjectsInProgress(projects);

export const isDonateInProgress = ({ doGood: { donate } }: State) =>
  fromDoGood.isDonateInProgress(donate);
export const isDonateSuccess = ({ doGood: { donate } }: State) =>
  fromDoGood.isDonateSuccess(donate);
export const isDonateError = ({ doGood: { donate } }: State) =>
  fromDoGood.isDonateError(donate);
export const getDonation = ({ doGood: { donate } }: State) =>
  fromDoGood.getDonation(donate);
