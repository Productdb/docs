import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/api',
    component: ComponentCreator('/api', 'd71'),
    exact: true
  },
  {
    path: '/api/v2',
    component: ComponentCreator('/api/v2', '56e'),
    exact: true
  },
  {
    path: '/faq',
    component: ComponentCreator('/faq', 'de3'),
    exact: true
  },
  {
    path: '/getting-started',
    component: ComponentCreator('/getting-started', '5d8'),
    exact: true
  },
  {
    path: '/release-notes',
    component: ComponentCreator('/release-notes', 'f63'),
    exact: true
  },
  {
    path: '/release-notes/rest-api',
    component: ComponentCreator('/release-notes/rest-api', 'bd6'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '164'),
    exact: true
  },
  {
    path: '/android',
    component: ComponentCreator('/android', '45e'),
    routes: [
      {
        path: '/android',
        component: ComponentCreator('/android', '1e1'),
        routes: [
          {
            path: '/android/tags',
            component: ComponentCreator('/android/tags', '503'),
            exact: true
          },
          {
            path: '/android/tags/android-ui-kit',
            component: ComponentCreator('/android/tags/android-ui-kit', '458'),
            exact: true
          },
          {
            path: '/android/tags/plugins',
            component: ComponentCreator('/android/tags/plugins', 'fe7'),
            exact: true
          },
          {
            path: '/android/tags/releasenotes',
            component: ComponentCreator('/android/tags/releasenotes', '860'),
            exact: true
          },
          {
            path: '/android',
            component: ComponentCreator('/android', 'f2f'),
            routes: [
              {
                path: '/android',
                component: ComponentCreator('/android', 'f2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/advanced-usage',
                component: ComponentCreator('/android/advanced-usage', 'dfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/build-your-own/add-audio-video-device',
                component: ComponentCreator('/android/build-pre-call-ui/build-your-own/add-audio-video-device', '1c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/build-your-own/add-audio-video-preview',
                component: ComponentCreator('/android/build-pre-call-ui/build-your-own/add-audio-video-preview', 'd28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/build-your-own/edit-user-name',
                component: ComponentCreator('/android/build-pre-call-ui/build-your-own/edit-user-name', '95b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/build-your-own/initial-code-skeleton',
                component: ComponentCreator('/android/build-pre-call-ui/build-your-own/initial-code-skeleton', 'f3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/build-pre-call-ui/default-setup-screen',
                component: ComponentCreator('/android/build-pre-call-ui/default-setup-screen', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/chat/prebuilt-screen',
                component: ComponentCreator('/android/chat/prebuilt-screen', 'ace'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components',
                component: ComponentCreator('/android/components', '035'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-audio-selector',
                component: ComponentCreator('/android/components/dyte-audio-selector', 'f24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-audio-visualizer',
                component: ComponentCreator('/android/components/dyte-audio-visualizer', 'bd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-avatar',
                component: ComponentCreator('/android/components/dyte-avatar', '10c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-button',
                component: ComponentCreator('/android/components/dyte-button', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-camera-toggle',
                component: ComponentCreator('/android/components/dyte-camera-toggle', '1f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-chat',
                component: ComponentCreator('/android/components/dyte-chat', '017'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-clock',
                component: ComponentCreator('/android/components/dyte-clock', '701'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-controlbar-button',
                component: ComponentCreator('/android/components/dyte-controlbar-button', 'a1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-grid',
                component: ComponentCreator('/android/components/dyte-grid', 'c94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-grid-pagination',
                component: ComponentCreator('/android/components/dyte-grid-pagination', 'dd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-idle-screen',
                component: ComponentCreator('/android/components/dyte-idle-screen', 'b71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-join-stage',
                component: ComponentCreator('/android/components/dyte-join-stage', 'df1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-leave-button',
                component: ComponentCreator('/android/components/dyte-leave-button', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-leave-meeting',
                component: ComponentCreator('/android/components/dyte-leave-meeting', 'd9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-meeting',
                component: ComponentCreator('/android/components/dyte-meeting', 'a30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-meeting-title',
                component: ComponentCreator('/android/components/dyte-meeting-title', 'ed4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-mic-toggle',
                component: ComponentCreator('/android/components/dyte-mic-toggle', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-more-toggle',
                component: ComponentCreator('/android/components/dyte-more-toggle', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-name-tag',
                component: ComponentCreator('/android/components/dyte-name-tag', '787'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-participant-count',
                component: ComponentCreator('/android/components/dyte-participant-count', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-participants',
                component: ComponentCreator('/android/components/dyte-participants', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-plugins',
                component: ComponentCreator('/android/components/dyte-plugins', 'be3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-poll-form',
                component: ComponentCreator('/android/components/dyte-poll-form', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-polls',
                component: ComponentCreator('/android/components/dyte-polls', '00b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-recording-indicator',
                component: ComponentCreator('/android/components/dyte-recording-indicator', '3b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-settings',
                component: ComponentCreator('/android/components/dyte-settings', '496'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-setup-screen',
                component: ComponentCreator('/android/components/dyte-setup-screen', 'cc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-video-selector',
                component: ComponentCreator('/android/components/dyte-video-selector', 'b6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/dyte-webinar-stage-toggle',
                component: ComponentCreator('/android/components/dyte-webinar-stage-toggle', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/customize-meeting-ui',
                component: ComponentCreator('/android/customize-meeting-ui', '45c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/participants/introduction',
                component: ComponentCreator('/android/participants/introduction', '9c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/participants/prebuilt',
                component: ComponentCreator('/android/participants/prebuilt', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/plugins/introduction',
                component: ComponentCreator('/android/plugins/introduction', 'e69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/plugins/prebuilt',
                component: ComponentCreator('/android/plugins/prebuilt', 'ace'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/polls/prebuilt-create-poll',
                component: ComponentCreator('/android/polls/prebuilt-create-poll', '334'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/polls/prebuilt-polls-screen',
                component: ComponentCreator('/android/polls/prebuilt-polls-screen', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/release-notes',
                component: ComponentCreator('/android/release-notes', 'abb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/render-participant-videos/custom-ui',
                component: ComponentCreator('/android/render-participant-videos/custom-ui', '941'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/render-participant-videos/using-dytegrid',
                component: ComponentCreator('/android/render-participant-videos/using-dytegrid', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/sample-app',
                component: ComponentCreator('/android/sample-app', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/android-core',
    component: ComponentCreator('/android-core', '55d'),
    routes: [
      {
        path: '/android-core',
        component: ComponentCreator('/android-core', 'a74'),
        routes: [
          {
            path: '/android-core/tags',
            component: ComponentCreator('/android-core/tags', 'c5b'),
            exact: true
          },
          {
            path: '/android-core/tags/android-core',
            component: ComponentCreator('/android-core/tags/android-core', 'b93'),
            exact: true
          },
          {
            path: '/android-core/tags/chat',
            component: ComponentCreator('/android-core/tags/chat', '32f'),
            exact: true
          },
          {
            path: '/android-core/tags/create',
            component: ComponentCreator('/android-core/tags/create', '18c'),
            exact: true
          },
          {
            path: '/android-core/tags/livestream',
            component: ComponentCreator('/android-core/tags/livestream', 'a11'),
            exact: true
          },
          {
            path: '/android-core/tags/local-user',
            component: ComponentCreator('/android-core/tags/local-user', '141'),
            exact: true
          },
          {
            path: '/android-core/tags/participants',
            component: ComponentCreator('/android-core/tags/participants', 'c8e'),
            exact: true
          },
          {
            path: '/android-core/tags/plugins',
            component: ComponentCreator('/android-core/tags/plugins', '22e'),
            exact: true
          },
          {
            path: '/android-core/tags/polls',
            component: ComponentCreator('/android-core/tags/polls', '63c'),
            exact: true
          },
          {
            path: '/android-core/tags/quickstart',
            component: ComponentCreator('/android-core/tags/quickstart', '93c'),
            exact: true
          },
          {
            path: '/android-core/tags/recording',
            component: ComponentCreator('/android-core/tags/recording', '701'),
            exact: true
          },
          {
            path: '/android-core/tags/releasenotes',
            component: ComponentCreator('/android-core/tags/releasenotes', '902'),
            exact: true
          },
          {
            path: '/android-core/tags/room-metadata',
            component: ComponentCreator('/android-core/tags/room-metadata', '66a'),
            exact: true
          },
          {
            path: '/android-core/tags/self',
            component: ComponentCreator('/android-core/tags/self', 'a61'),
            exact: true
          },
          {
            path: '/android-core/tags/self-events',
            component: ComponentCreator('/android-core/tags/self-events', '430'),
            exact: true
          },
          {
            path: '/android-core/tags/setup',
            component: ComponentCreator('/android-core/tags/setup', '6d6'),
            exact: true
          },
          {
            path: '/android-core/tags/stage',
            component: ComponentCreator('/android-core/tags/stage', 'd74'),
            exact: true
          },
          {
            path: '/android-core/tags/votes',
            component: ComponentCreator('/android-core/tags/votes', '39c'),
            exact: true
          },
          {
            path: '/android-core/tags/waiting-room',
            component: ComponentCreator('/android-core/tags/waiting-room', '90f'),
            exact: true
          },
          {
            path: '/android-core/tags/waitlisted',
            component: ComponentCreator('/android-core/tags/waitlisted', 'fda'),
            exact: true
          },
          {
            path: '/android-core',
            component: ComponentCreator('/android-core', '19b'),
            routes: [
              {
                path: '/android-core',
                component: ComponentCreator('/android-core', '375'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/chat/introduction',
                component: ComponentCreator('/android-core/chat/introduction', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/chat/receiving-chat-messages',
                component: ComponentCreator('/android-core/chat/receiving-chat-messages', '175'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/chat/sending-a-chat-message',
                component: ComponentCreator('/android-core/chat/sending-a-chat-message', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/error-codes',
                component: ComponentCreator('/android-core/error-codes', '44d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/Introduction',
                component: ComponentCreator('/android-core/Introduction', '5dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/livestream/dyte-livestream-listener',
                component: ComponentCreator('/android-core/livestream/dyte-livestream-listener', 'b39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/livestream/dyte-livestream-object',
                component: ComponentCreator('/android-core/livestream/dyte-livestream-object', 'e73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/livestream/introduction',
                component: ComponentCreator('/android-core/livestream/introduction', 'e66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/local-user/events',
                component: ComponentCreator('/android-core/local-user/events', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/local-user/introduction',
                component: ComponentCreator('/android-core/local-user/introduction', 'a10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/local-user/manage-media-devices',
                component: ComponentCreator('/android-core/local-user/manage-media-devices', '3a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/local-user/manage-permissions',
                component: ComponentCreator('/android-core/local-user/manage-permissions', '83b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/participants',
                component: ComponentCreator('/android-core/participants', '5ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/participants/events',
                component: ComponentCreator('/android-core/participants/events', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/participants/participant-object',
                component: ComponentCreator('/android-core/participants/participant-object', '094'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/participants/waitlisted-participants',
                component: ComponentCreator('/android-core/participants/waitlisted-participants', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/plugins/enable-disable-plugin',
                component: ComponentCreator('/android-core/plugins/enable-disable-plugin', '86d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/plugins/extra',
                component: ComponentCreator('/android-core/plugins/extra', '43d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/plugins/introduction',
                component: ComponentCreator('/android-core/plugins/introduction', '3c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/polls/creating-a-poll',
                component: ComponentCreator('/android-core/polls/creating-a-poll', '0c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/polls/introduction',
                component: ComponentCreator('/android-core/polls/introduction', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/polls/voting-on-a-poll',
                component: ComponentCreator('/android-core/polls/voting-on-a-poll', '669'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/pre-call/handling-permissions',
                component: ComponentCreator('/android-core/pre-call/handling-permissions', 'af8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/pre-call/media-preview',
                component: ComponentCreator('/android-core/pre-call/media-preview', 'bbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/pre-call/meeting-meta',
                component: ComponentCreator('/android-core/pre-call/meeting-meta', 'a9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/pre-call/waiting-room',
                component: ComponentCreator('/android-core/pre-call/waiting-room', 'afa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/recording',
                component: ComponentCreator('/android-core/recording', '98c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/release-notes',
                component: ComponentCreator('/android-core/release-notes', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/room-metadata',
                component: ComponentCreator('/android-core/room-metadata', '182'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/stage-management/host-controls',
                component: ComponentCreator('/android-core/stage-management/host-controls', '140'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/stage-management/introduction',
                component: ComponentCreator('/android-core/stage-management/introduction', 'b1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/stage-management/viewer-participants',
                component: ComponentCreator('/android-core/stage-management/viewer-participants', 'a98'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/angular-ui-kit',
    component: ComponentCreator('/angular-ui-kit', '4f7'),
    routes: [
      {
        path: '/angular-ui-kit',
        component: ComponentCreator('/angular-ui-kit', '547'),
        routes: [
          {
            path: '/angular-ui-kit/tags',
            component: ComponentCreator('/angular-ui-kit/tags', '415'),
            exact: true
          },
          {
            path: '/angular-ui-kit/tags/releasenotes',
            component: ComponentCreator('/angular-ui-kit/tags/releasenotes', '383'),
            exact: true
          },
          {
            path: '/angular-ui-kit',
            component: ComponentCreator('/angular-ui-kit', '741'),
            routes: [
              {
                path: '/angular-ui-kit',
                component: ComponentCreator('/angular-ui-kit', '3c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/basics/components-basics',
                component: ComponentCreator('/angular-ui-kit/basics/components-basics', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/basics/pre-requisite',
                component: ComponentCreator('/angular-ui-kit/basics/pre-requisite', 'f77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components',
                component: ComponentCreator('/angular-ui-kit/components', '831'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-audio-visualizer',
                component: ComponentCreator('/angular-ui-kit/components/dyte-audio-visualizer', 'e40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-avatar',
                component: ComponentCreator('/angular-ui-kit/components/dyte-avatar', 'fd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-button',
                component: ComponentCreator('/angular-ui-kit/components/dyte-button', 'f99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-camera-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-camera-toggle', '340'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-chat',
                component: ComponentCreator('/angular-ui-kit/components/dyte-chat', '3d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-chat-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-chat-toggle', '6cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-clock',
                component: ComponentCreator('/angular-ui-kit/components/dyte-clock', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-confirmation-modal',
                component: ComponentCreator('/angular-ui-kit/components/dyte-confirmation-modal', 'ba8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-controlbar',
                component: ComponentCreator('/angular-ui-kit/components/dyte-controlbar', 'db9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-controlbar-button',
                component: ComponentCreator('/angular-ui-kit/components/dyte-controlbar-button', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-dialog',
                component: ComponentCreator('/angular-ui-kit/components/dyte-dialog', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-dialog-manager',
                component: ComponentCreator('/angular-ui-kit/components/dyte-dialog-manager', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-emoji-picker',
                component: ComponentCreator('/angular-ui-kit/components/dyte-emoji-picker', '840'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-ended-screen',
                component: ComponentCreator('/angular-ui-kit/components/dyte-ended-screen', '4cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-file-message',
                component: ComponentCreator('/angular-ui-kit/components/dyte-file-message', '777'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-fullscreen-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-fullscreen-toggle', '1c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-grid',
                component: ComponentCreator('/angular-ui-kit/components/dyte-grid', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-grid-pagination',
                component: ComponentCreator('/angular-ui-kit/components/dyte-grid-pagination', '235'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-header',
                component: ComponentCreator('/angular-ui-kit/components/dyte-header', '2de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-icon',
                component: ComponentCreator('/angular-ui-kit/components/dyte-icon', '407'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-idle-screen',
                component: ComponentCreator('/angular-ui-kit/components/dyte-idle-screen', '130'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-image-message',
                component: ComponentCreator('/angular-ui-kit/components/dyte-image-message', '567'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-image-viewer',
                component: ComponentCreator('/angular-ui-kit/components/dyte-image-viewer', '500'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-leave-button',
                component: ComponentCreator('/angular-ui-kit/components/dyte-leave-button', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-leave-meeting',
                component: ComponentCreator('/angular-ui-kit/components/dyte-leave-meeting', '515'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-logo',
                component: ComponentCreator('/angular-ui-kit/components/dyte-logo', '7de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-meeting',
                component: ComponentCreator('/angular-ui-kit/components/dyte-meeting', 'b2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-meeting-title',
                component: ComponentCreator('/angular-ui-kit/components/dyte-meeting-title', 'cef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-menu',
                component: ComponentCreator('/angular-ui-kit/components/dyte-menu', '4b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-menu-item',
                component: ComponentCreator('/angular-ui-kit/components/dyte-menu-item', '4ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-menu-list',
                component: ComponentCreator('/angular-ui-kit/components/dyte-menu-list', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-mic-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-mic-toggle', '382'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-mixed-grid',
                component: ComponentCreator('/angular-ui-kit/components/dyte-mixed-grid', 'f47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-more-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-more-toggle', 'b17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-name-tag',
                component: ComponentCreator('/angular-ui-kit/components/dyte-name-tag', 'b3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-network-indicator',
                component: ComponentCreator('/angular-ui-kit/components/dyte-network-indicator', 'b9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-notification',
                component: ComponentCreator('/angular-ui-kit/components/dyte-notification', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-notifications',
                component: ComponentCreator('/angular-ui-kit/components/dyte-notifications', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-overlay-modal',
                component: ComponentCreator('/angular-ui-kit/components/dyte-overlay-modal', '6a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participant',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participant', '41d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participant-count',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participant-count', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participant-tile',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participant-tile', '8f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participants',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participants', 'fa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participants-audio',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participants-audio', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participants-stage-list',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participants-stage-list', '6b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-participants-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-participants-toggle', '75d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-permissions-message',
                component: ComponentCreator('/angular-ui-kit/components/dyte-permissions-message', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-plugin-main',
                component: ComponentCreator('/angular-ui-kit/components/dyte-plugin-main', '4df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-plugins',
                component: ComponentCreator('/angular-ui-kit/components/dyte-plugins', 'd84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-plugins-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-plugins-toggle', '032'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-poll',
                component: ComponentCreator('/angular-ui-kit/components/dyte-poll', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-poll-form',
                component: ComponentCreator('/angular-ui-kit/components/dyte-poll-form', '685'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-polls',
                component: ComponentCreator('/angular-ui-kit/components/dyte-polls', 'bc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-polls-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-polls-toggle', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-recording-indicator',
                component: ComponentCreator('/angular-ui-kit/components/dyte-recording-indicator', '4a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-recording-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-recording-toggle', 'a50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-remote-access-manager',
                component: ComponentCreator('/angular-ui-kit/components/dyte-remote-access-manager', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-screen-share-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-screen-share-toggle', '123'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-screenshare-view',
                component: ComponentCreator('/angular-ui-kit/components/dyte-screenshare-view', 'cf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-settings',
                component: ComponentCreator('/angular-ui-kit/components/dyte-settings', 'fe8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-settings-audio',
                component: ComponentCreator('/angular-ui-kit/components/dyte-settings-audio', 'e5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-settings-toggle',
                component: ComponentCreator('/angular-ui-kit/components/dyte-settings-toggle', '068'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-settings-video',
                component: ComponentCreator('/angular-ui-kit/components/dyte-settings-video', 'a56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-setup-screen',
                component: ComponentCreator('/angular-ui-kit/components/dyte-setup-screen', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-sidebar',
                component: ComponentCreator('/angular-ui-kit/components/dyte-sidebar', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-simple-grid',
                component: ComponentCreator('/angular-ui-kit/components/dyte-simple-grid', '8af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-spinner',
                component: ComponentCreator('/angular-ui-kit/components/dyte-spinner', '475'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-spotlight-grid',
                component: ComponentCreator('/angular-ui-kit/components/dyte-spotlight-grid', '0ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-stage',
                component: ComponentCreator('/angular-ui-kit/components/dyte-stage', '5e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-switch',
                component: ComponentCreator('/angular-ui-kit/components/dyte-switch', '0ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-text-field',
                component: ComponentCreator('/angular-ui-kit/components/dyte-text-field', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-text-message',
                component: ComponentCreator('/angular-ui-kit/components/dyte-text-message', '75e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-tooltip',
                component: ComponentCreator('/angular-ui-kit/components/dyte-tooltip', '45d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/dyte-viewer-count',
                component: ComponentCreator('/angular-ui-kit/components/dyte-viewer-count', '3ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/customizations/custom-iconpack',
                component: ComponentCreator('/angular-ui-kit/customizations/custom-iconpack', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/customizations/custom-locale',
                component: ComponentCreator('/angular-ui-kit/customizations/custom-locale', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/design-system',
                component: ComponentCreator('/angular-ui-kit/design-system', '122'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/quickstart',
                component: ComponentCreator('/angular-ui-kit/quickstart', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference',
                component: ComponentCreator('/angular-ui-kit/reference', '2bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/classes/DyteNotificationsAudio',
                component: ComponentCreator('/angular-ui-kit/reference/classes/DyteNotificationsAudio', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/Notification',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/Notification', '752'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/PollObject',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/PollObject', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/States',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/States', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/UIConfig',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/UIConfig', '0d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/reference/interfaces/UserPreferences',
                component: ComponentCreator('/angular-ui-kit/reference/interfaces/UserPreferences', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/release-notes',
                component: ComponentCreator('/angular-ui-kit/release-notes', '2bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/cli',
    component: ComponentCreator('/cli', '804'),
    routes: [
      {
        path: '/cli',
        component: ComponentCreator('/cli', '9b8'),
        routes: [
          {
            path: '/cli',
            component: ComponentCreator('/cli', '10e'),
            routes: [
              {
                path: '/cli',
                component: ComponentCreator('/cli', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/getting-started',
                component: ComponentCreator('/cli/getting-started', '904'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/meetings',
                component: ComponentCreator('/cli/meetings', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/plugins',
                component: ComponentCreator('/cli/plugins', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/recording',
                component: ComponentCreator('/cli/recording', '95a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cli/webhooks',
                component: ComponentCreator('/cli/webhooks', '260'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/community-packages',
    component: ComponentCreator('/community-packages', 'cd3'),
    routes: [
      {
        path: '/community-packages',
        component: ComponentCreator('/community-packages', '483'),
        routes: [
          {
            path: '/community-packages',
            component: ComponentCreator('/community-packages', '140'),
            routes: [
              {
                path: '/community-packages',
                component: ComponentCreator('/community-packages', 'db8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/device-emulator',
                component: ComponentCreator('/community-packages/device-emulator', '81d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/device-emulator/examples',
                component: ComponentCreator('/community-packages/device-emulator/examples', '257'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/socketio-client',
                component: ComponentCreator('/community-packages/socketio-client', '656'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/socketio-client/emitting',
                component: ComponentCreator('/community-packages/socketio-client/emitting', 'bdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/community-packages/socketio-client/initialization',
                component: ComponentCreator('/community-packages/socketio-client/initialization', '616'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/flutter',
    component: ComponentCreator('/flutter', '612'),
    routes: [
      {
        path: '/flutter',
        component: ComponentCreator('/flutter', 'c86'),
        routes: [
          {
            path: '/flutter/tags',
            component: ComponentCreator('/flutter/tags', '33d'),
            exact: true
          },
          {
            path: '/flutter/tags/design-system',
            component: ComponentCreator('/flutter/tags/design-system', 'fe9'),
            exact: true
          },
          {
            path: '/flutter/tags/flutter-ui-kit',
            component: ComponentCreator('/flutter/tags/flutter-ui-kit', '214'),
            exact: true
          },
          {
            path: '/flutter/tags/releasenotes',
            component: ComponentCreator('/flutter/tags/releasenotes', '668'),
            exact: true
          },
          {
            path: '/flutter',
            component: ComponentCreator('/flutter', '437'),
            routes: [
              {
                path: '/flutter',
                component: ComponentCreator('/flutter', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-audio-indicator-icon-widget',
                component: ComponentCreator('/flutter/Components/dyte-audio-indicator-icon-widget', '593'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-chat-icon-widget',
                component: ComponentCreator('/flutter/Components/dyte-chat-icon-widget', 'e62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-join-button',
                component: ComponentCreator('/flutter/Components/dyte-join-button', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-leave-button',
                component: ComponentCreator('/flutter/Components/dyte-leave-button', '75a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-leave-meeting-dialog',
                component: ComponentCreator('/flutter/Components/dyte-leave-meeting-dialog', 'a87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-meeting-title',
                component: ComponentCreator('/flutter/Components/dyte-meeting-title', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-name-tag-widget',
                component: ComponentCreator('/flutter/Components/dyte-name-tag-widget', '46d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-participant-tile',
                component: ComponentCreator('/flutter/Components/dyte-participant-tile', '68d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-participants-icon-widget',
                component: ComponentCreator('/flutter/Components/dyte-participants-icon-widget', '6c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-plugins-screen',
                component: ComponentCreator('/flutter/Components/dyte-plugins-screen', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-polls-screen',
                component: ComponentCreator('/flutter/Components/dyte-polls-screen', '0d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-provider',
                component: ComponentCreator('/flutter/Components/dyte-provider', '464'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-self-audio-toggle',
                component: ComponentCreator('/flutter/Components/dyte-self-audio-toggle', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-self-video-toggle',
                component: ComponentCreator('/flutter/Components/dyte-self-video-toggle', 'cbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/dyte-setup-screen-component',
                component: ComponentCreator('/flutter/Components/dyte-setup-screen-component', 'fbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/design-token',
                component: ComponentCreator('/flutter/design-token', '8af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/quickstart',
                component: ComponentCreator('/flutter/quickstart', 'af3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/release-notes',
                component: ComponentCreator('/flutter/release-notes', 'b79'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/flutter-core',
    component: ComponentCreator('/flutter-core', 'd9e'),
    routes: [
      {
        path: '/flutter-core',
        component: ComponentCreator('/flutter-core', '104'),
        routes: [
          {
            path: '/flutter-core/tags',
            component: ComponentCreator('/flutter-core/tags', '4ec'),
            exact: true
          },
          {
            path: '/flutter-core/tags/chat',
            component: ComponentCreator('/flutter-core/tags/chat', '461'),
            exact: true
          },
          {
            path: '/flutter-core/tags/create',
            component: ComponentCreator('/flutter-core/tags/create', '528'),
            exact: true
          },
          {
            path: '/flutter-core/tags/flutter-core',
            component: ComponentCreator('/flutter-core/tags/flutter-core', 'b3a'),
            exact: true
          },
          {
            path: '/flutter-core/tags/host-actions',
            component: ComponentCreator('/flutter-core/tags/host-actions', '477'),
            exact: true
          },
          {
            path: '/flutter-core/tags/livestream',
            component: ComponentCreator('/flutter-core/tags/livestream', '1ba'),
            exact: true
          },
          {
            path: '/flutter-core/tags/local-user',
            component: ComponentCreator('/flutter-core/tags/local-user', 'f16'),
            exact: true
          },
          {
            path: '/flutter-core/tags/mobile-core',
            component: ComponentCreator('/flutter-core/tags/mobile-core', 'b66'),
            exact: true
          },
          {
            path: '/flutter-core/tags/participant',
            component: ComponentCreator('/flutter-core/tags/participant', '2f4'),
            exact: true
          },
          {
            path: '/flutter-core/tags/participants',
            component: ComponentCreator('/flutter-core/tags/participants', 'b69'),
            exact: true
          },
          {
            path: '/flutter-core/tags/permissions',
            component: ComponentCreator('/flutter-core/tags/permissions', '6b6'),
            exact: true
          },
          {
            path: '/flutter-core/tags/polls',
            component: ComponentCreator('/flutter-core/tags/polls', '538'),
            exact: true
          },
          {
            path: '/flutter-core/tags/quickstart',
            component: ComponentCreator('/flutter-core/tags/quickstart', 'ae0'),
            exact: true
          },
          {
            path: '/flutter-core/tags/recording',
            component: ComponentCreator('/flutter-core/tags/recording', 'e8b'),
            exact: true
          },
          {
            path: '/flutter-core/tags/releasenotes',
            component: ComponentCreator('/flutter-core/tags/releasenotes', 'b65'),
            exact: true
          },
          {
            path: '/flutter-core/tags/room-metadata',
            component: ComponentCreator('/flutter-core/tags/room-metadata', 'd51'),
            exact: true
          },
          {
            path: '/flutter-core/tags/self',
            component: ComponentCreator('/flutter-core/tags/self', 'a2a'),
            exact: true
          },
          {
            path: '/flutter-core/tags/self-events',
            component: ComponentCreator('/flutter-core/tags/self-events', '029'),
            exact: true
          },
          {
            path: '/flutter-core/tags/stage',
            component: ComponentCreator('/flutter-core/tags/stage', '241'),
            exact: true
          },
          {
            path: '/flutter-core/tags/votes',
            component: ComponentCreator('/flutter-core/tags/votes', 'a95'),
            exact: true
          },
          {
            path: '/flutter-core/tags/waiting-room',
            component: ComponentCreator('/flutter-core/tags/waiting-room', 'f01'),
            exact: true
          },
          {
            path: '/flutter-core/tags/waitlisted',
            component: ComponentCreator('/flutter-core/tags/waitlisted', '0db'),
            exact: true
          },
          {
            path: '/flutter-core',
            component: ComponentCreator('/flutter-core', 'ff1'),
            routes: [
              {
                path: '/flutter-core',
                component: ComponentCreator('/flutter-core', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/chat/introduction',
                component: ComponentCreator('/flutter-core/chat/introduction', '357'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/chat/receiving-chat-messages',
                component: ComponentCreator('/flutter-core/chat/receiving-chat-messages', 'd7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/chat/sending-a-chat-message',
                component: ComponentCreator('/flutter-core/chat/sending-a-chat-message', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/host-actions',
                component: ComponentCreator('/flutter-core/host-actions', 'd95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/introduction',
                component: ComponentCreator('/flutter-core/introduction', 'e4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/livestream',
                component: ComponentCreator('/flutter-core/livestream', 'abc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/events',
                component: ComponentCreator('/flutter-core/local-user/events', '9b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/introduction',
                component: ComponentCreator('/flutter-core/local-user/introduction', '1da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/manage-media-devices',
                component: ComponentCreator('/flutter-core/local-user/manage-media-devices', 'b8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/manage-permissions',
                component: ComponentCreator('/flutter-core/local-user/manage-permissions', '126'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/local-user/screen-share-iOS-guide',
                component: ComponentCreator('/flutter-core/local-user/screen-share-iOS-guide', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants',
                component: ComponentCreator('/flutter-core/participants', '2f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants/events',
                component: ComponentCreator('/flutter-core/participants/events', 'cb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants/introduction',
                component: ComponentCreator('/flutter-core/participants/introduction', '207'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants/participant-object',
                component: ComponentCreator('/flutter-core/participants/participant-object', 'a33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/participants/waitlisted-participants',
                component: ComponentCreator('/flutter-core/participants/waitlisted-participants', '106'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/polls/creating-a-poll',
                component: ComponentCreator('/flutter-core/polls/creating-a-poll', '800'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/polls/introduction',
                component: ComponentCreator('/flutter-core/polls/introduction', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/polls/voting-on-a-poll',
                component: ComponentCreator('/flutter-core/polls/voting-on-a-poll', '622'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/pre-call/media-preview',
                component: ComponentCreator('/flutter-core/pre-call/media-preview', '2a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/pre-call/meeting-meta',
                component: ComponentCreator('/flutter-core/pre-call/meeting-meta', '785'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/pre-call/waiting-room',
                component: ComponentCreator('/flutter-core/pre-call/waiting-room', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/recording',
                component: ComponentCreator('/flutter-core/recording', 'd3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/release-notes',
                component: ComponentCreator('/flutter-core/release-notes', '5c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/room-metadata',
                component: ComponentCreator('/flutter-core/room-metadata', '356'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/stage-management/host-controls',
                component: ComponentCreator('/flutter-core/stage-management/host-controls', '1c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/stage-management/introduction',
                component: ComponentCreator('/flutter-core/stage-management/introduction', '4d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter-core/stage-management/viewer-participants',
                component: ComponentCreator('/flutter-core/stage-management/viewer-participants', '673'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/guides',
    component: ComponentCreator('/guides', 'e45'),
    routes: [
      {
        path: '/guides',
        component: ComponentCreator('/guides', '674'),
        routes: [
          {
            path: '/guides',
            component: ComponentCreator('/guides', '7f4'),
            routes: [
              {
                path: '/guides',
                component: ComponentCreator('/guides', 'da3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/ai',
                component: ComponentCreator('/guides/capabilities/ai', 'bea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/ai/meeting-transcription',
                component: ComponentCreator('/guides/capabilities/ai/meeting-transcription', '4fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/audio/processing',
                component: ComponentCreator('/guides/capabilities/audio/processing', 'f58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/audio/transcriptionAWS',
                component: ComponentCreator('/guides/capabilities/audio/transcriptionAWS', '34e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/audio/transcriptionGoogle',
                component: ComponentCreator('/guides/capabilities/audio/transcriptionGoogle', 'c0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/audio/transcriptions',
                component: ComponentCreator('/guides/capabilities/audio/transcriptions', '685'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/breakoutroom/create-breakout-rooms',
                component: ComponentCreator('/guides/capabilities/breakoutroom/create-breakout-rooms', '77b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/breakoutroom/integrating-breakout-rooms',
                component: ComponentCreator('/guides/capabilities/breakoutroom/integrating-breakout-rooms', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/breakoutroom/introduction-breakout-rooms',
                component: ComponentCreator('/guides/capabilities/breakoutroom/introduction-breakout-rooms', 'e0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/chat/export-chat-dump',
                component: ComponentCreator('/guides/capabilities/chat/export-chat-dump', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/misc/embed',
                component: ComponentCreator('/guides/capabilities/misc/embed', '4eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/misc/livestreaming-other-platforms',
                component: ComponentCreator('/guides/capabilities/misc/livestreaming-other-platforms', '886'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins',
                component: ComponentCreator('/guides/capabilities/plugins', '837'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins/docshare',
                component: ComponentCreator('/guides/capabilities/plugins/docshare', '8dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins/rendering',
                component: ComponentCreator('/guides/capabilities/plugins/rendering', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins/streamer',
                component: ComponentCreator('/guides/capabilities/plugins/streamer', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/plugins/whiteboard',
                component: ComponentCreator('/guides/capabilities/plugins/whiteboard', 'ea5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/polls',
                component: ComponentCreator('/guides/capabilities/polls', '130'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/polls/getting_started',
                component: ComponentCreator('/guides/capabilities/polls/getting_started', '22b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/polls/uikit',
                component: ComponentCreator('/guides/capabilities/polls/uikit', '5e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording',
                component: ComponentCreator('/guides/capabilities/recording', 'd69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/add-watermark',
                component: ComponentCreator('/guides/capabilities/recording/add-watermark', 'bb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/configure-audio-codec',
                component: ComponentCreator('/guides/capabilities/recording/configure-audio-codec', '29e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/configure-codecs',
                component: ComponentCreator('/guides/capabilities/recording/configure-codecs', 'ac3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/configure-dyte-bucket-config',
                component: ComponentCreator('/guides/capabilities/recording/configure-dyte-bucket-config', '000'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/create-record-app-using-sdks',
                component: ComponentCreator('/guides/capabilities/recording/create-record-app-using-sdks', 'f81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/custom-cloud-storage',
                component: ComponentCreator('/guides/capabilities/recording/custom-cloud-storage', '989'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/interactive-recording',
                component: ComponentCreator('/guides/capabilities/recording/interactive-recording', '43e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/manage-recording-config-hierarchy',
                component: ComponentCreator('/guides/capabilities/recording/manage-recording-config-hierarchy', 'f8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/monitor-status',
                component: ComponentCreator('/guides/capabilities/recording/monitor-status', '416'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/recording-overview',
                component: ComponentCreator('/guides/capabilities/recording/recording-overview', '624'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/start-recording',
                component: ComponentCreator('/guides/capabilities/recording/start-recording', 'de3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/recording/stop-recording',
                component: ComponentCreator('/guides/capabilities/recording/stop-recording', '61a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/screensharing/basics',
                component: ComponentCreator('/guides/capabilities/screensharing/basics', 'edb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/screensharing/displaying',
                component: ComponentCreator('/guides/capabilities/screensharing/displaying', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/sip',
                component: ComponentCreator('/guides/capabilities/sip', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/video/add-virtual-background',
                component: ComponentCreator('/guides/capabilities/video/add-virtual-background', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/video/picture-in-picture',
                component: ComponentCreator('/guides/capabilities/video/picture-in-picture', 'cdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/video/processing',
                component: ComponentCreator('/guides/capabilities/video/processing', 'e31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks',
                component: ComponentCreator('/guides/capabilities/webhooks', 'd9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks/signatures',
                component: ComponentCreator('/guides/capabilities/webhooks/signatures', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks/webhook-events',
                component: ComponentCreator('/guides/capabilities/webhooks/webhook-events', 'ee4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks/webhooks-and-events',
                component: ComponentCreator('/guides/capabilities/webhooks/webhooks-and-events', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webhooks/webhooks-overview',
                component: ComponentCreator('/guides/capabilities/webhooks/webhooks-overview', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/capabilities/webinar/intro-webinar',
                component: ComponentCreator('/guides/capabilities/webinar/intro-webinar', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/build-live-video-app',
                component: ComponentCreator('/guides/classification/build-live-video-app', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/client-setup',
                component: ComponentCreator('/guides/classification/client-setup', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/client-setup/android',
                component: ComponentCreator('/guides/classification/client-setup/android', 'ba7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/client-setup/angular',
                component: ComponentCreator('/guides/classification/client-setup/angular', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/client-setup/flutter',
                component: ComponentCreator('/guides/classification/client-setup/flutter', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/client-setup/ios',
                component: ComponentCreator('/guides/classification/client-setup/ios', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/client-setup/javascript',
                component: ComponentCreator('/guides/classification/client-setup/javascript', '678'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/client-setup/react',
                component: ComponentCreator('/guides/classification/client-setup/react', '109'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/concepts',
                component: ComponentCreator('/guides/classification/concepts', '6d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/get-started',
                component: ComponentCreator('/guides/classification/get-started', '591'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/intro-classification',
                component: ComponentCreator('/guides/classification/intro-classification', '643'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/classification/next-steps',
                component: ComponentCreator('/guides/classification/next-steps', '37c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/build-voice-app',
                component: ComponentCreator('/guides/commerce/build-voice-app', '8e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/client-setup',
                component: ComponentCreator('/guides/commerce/client-setup', 'f93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/client-setup/android',
                component: ComponentCreator('/guides/commerce/client-setup/android', 'ce2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/client-setup/angular',
                component: ComponentCreator('/guides/commerce/client-setup/angular', 'f5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/client-setup/flutter',
                component: ComponentCreator('/guides/commerce/client-setup/flutter', 'f2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/client-setup/ios',
                component: ComponentCreator('/guides/commerce/client-setup/ios', '9e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/client-setup/javascript',
                component: ComponentCreator('/guides/commerce/client-setup/javascript', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/client-setup/react',
                component: ComponentCreator('/guides/commerce/client-setup/react', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/concepts',
                component: ComponentCreator('/guides/commerce/concepts', '5eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/get-started',
                component: ComponentCreator('/guides/commerce/get-started', '97a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/intro-commerce',
                component: ComponentCreator('/guides/commerce/intro-commerce', '34f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/commerce/next-steps',
                component: ComponentCreator('/guides/commerce/next-steps', '7fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/communication/build-in-app-chat-exp',
                component: ComponentCreator('/guides/communication/build-in-app-chat-exp', 'ac9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/communication/intro-communication',
                component: ComponentCreator('/guides/communication/intro-communication', '9c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/content/build-in-app-chat-exp',
                component: ComponentCreator('/guides/content/build-in-app-chat-exp', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/content/intro-content',
                component: ComponentCreator('/guides/content/intro-content', '9b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/interactive-onboarding/add-participant',
                component: ComponentCreator('/guides/interactive-onboarding/add-participant', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/interactive-onboarding/create-meeting',
                component: ComponentCreator('/guides/interactive-onboarding/create-meeting', '868'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/interactive-onboarding/init-sdk',
                component: ComponentCreator('/guides/interactive-onboarding/init-sdk', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/interactive-onboarding/join-meeting',
                component: ComponentCreator('/guides/interactive-onboarding/join-meeting', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/advanced/configuring-permissions',
                component: ComponentCreator('/guides/livestream/advanced/configuring-permissions', '792'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/advanced/livestream-any-rtmp',
                component: ComponentCreator('/guides/livestream/advanced/livestream-any-rtmp', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/build-livestream-app',
                component: ComponentCreator('/guides/livestream/build-livestream-app', '471'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup',
                component: ComponentCreator('/guides/livestream/client-setup', '0e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/android',
                component: ComponentCreator('/guides/livestream/client-setup/android', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/angular',
                component: ComponentCreator('/guides/livestream/client-setup/angular', 'c17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/flutter',
                component: ComponentCreator('/guides/livestream/client-setup/flutter', 'fcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/ios',
                component: ComponentCreator('/guides/livestream/client-setup/ios', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/javascript',
                component: ComponentCreator('/guides/livestream/client-setup/javascript', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/client-setup/react',
                component: ComponentCreator('/guides/livestream/client-setup/react', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/concepts',
                component: ComponentCreator('/guides/livestream/concepts', '7a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/get-started',
                component: ComponentCreator('/guides/livestream/get-started', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/livestream/livestream-overview',
                component: ComponentCreator('/guides/livestream/livestream-overview', 'cfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/opentok/concept-media-opentok',
                component: ComponentCreator('/guides/migration/opentok/concept-media-opentok', 'cf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/opentok/concepts-opentok-vs-dyte',
                component: ComponentCreator('/guides/migration/opentok/concepts-opentok-vs-dyte', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/opentok/opentok-shim-by-dyte',
                component: ComponentCreator('/guides/migration/opentok/opentok-shim-by-dyte', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/basics',
                component: ComponentCreator('/guides/migration/twilio/basics', '68a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/compatibility-shim-twilio',
                component: ComponentCreator('/guides/migration/twilio/compatibility-shim-twilio', '4a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/concepts-twilio-vs-dyte',
                component: ComponentCreator('/guides/migration/twilio/concepts-twilio-vs-dyte', '50f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/feature-comparison',
                component: ComponentCreator('/guides/migration/twilio/feature-comparison', 'bf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/media',
                component: ComponentCreator('/guides/migration/twilio/media', 'd24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/misc',
                component: ComponentCreator('/guides/migration/twilio/misc', 'ad2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/migration/twilio/twilio-shim-by-dyte',
                component: ComponentCreator('/guides/migration/twilio/twilio-shim-by-dyte', '294'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/rest-apis/livestream-dyte-meeting',
                component: ComponentCreator('/guides/rest-apis/livestream-dyte-meeting', 'a9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/rest-apis/quickstart',
                component: ComponentCreator('/guides/rest-apis/quickstart', '3f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/v2-migration-guide',
                component: ComponentCreator('/guides/v2-migration-guide', 'ccc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ios',
    component: ComponentCreator('/ios', 'ebc'),
    routes: [
      {
        path: '/ios',
        component: ComponentCreator('/ios', '74f'),
        routes: [
          {
            path: '/ios/tags',
            component: ComponentCreator('/ios/tags', '4aa'),
            exact: true
          },
          {
            path: '/ios/tags/releasenotes',
            component: ComponentCreator('/ios/tags/releasenotes', 'b56'),
            exact: true
          },
          {
            path: '/ios',
            component: ComponentCreator('/ios', 'abf'),
            routes: [
              {
                path: '/ios',
                component: ComponentCreator('/ios', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/build-pre-call-ui/build-your-own/dyte-setting',
                component: ComponentCreator('/ios/build-pre-call-ui/build-your-own/dyte-setting', '6d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/build-pre-call-ui/build-your-own/initial-code-skeleton',
                component: ComponentCreator('/ios/build-pre-call-ui/build-your-own/initial-code-skeleton', '613'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/build-pre-call-ui/default-setup-screen',
                component: ComponentCreator('/ios/build-pre-call-ui/default-setup-screen', 'a9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/chat/attachments-in-chat',
                component: ComponentCreator('/ios/chat/attachments-in-chat', '5aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/chat/components-in-chat',
                component: ComponentCreator('/ios/chat/components-in-chat', '3ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/chat/pre-built-chat-screen',
                component: ComponentCreator('/ios/chat/pre-built-chat-screen', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-active-tab-selector-view',
                component: ComponentCreator('/ios/components/dyte-active-tab-selector-view', '3f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-avatar',
                component: ComponentCreator('/ios/components/dyte-avatar', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-button',
                component: ComponentCreator('/ios/components/dyte-button', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-camera-toggle',
                component: ComponentCreator('/ios/components/dyte-camera-toggle', '112'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-chat',
                component: ComponentCreator('/ios/components/dyte-chat', '0ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-clock',
                component: ComponentCreator('/ios/components/dyte-clock', 'dc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-configure-alertview-protocol',
                component: ComponentCreator('/ios/components/dyte-configure-alertview-protocol', '1e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-controlbar-button',
                component: ComponentCreator('/ios/components/dyte-controlbar-button', 'a3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-end-meeting',
                component: ComponentCreator('/ios/components/dyte-end-meeting', '4aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-grid',
                component: ComponentCreator('/ios/components/dyte-grid', '714'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-grid-pagination',
                component: ComponentCreator('/ios/components/dyte-grid-pagination', '0bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-join-stage',
                component: ComponentCreator('/ios/components/dyte-join-stage', 'dde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-leave-alert-actions',
                component: ComponentCreator('/ios/components/dyte-leave-alert-actions', 'cba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-leave-meeting-alert',
                component: ComponentCreator('/ios/components/dyte-leave-meeting-alert', '344'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-meeting',
                component: ComponentCreator('/ios/components/dyte-meeting', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-meeting-titlelabel',
                component: ComponentCreator('/ios/components/dyte-meeting-titlelabel', 'ff6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-mic-toggle',
                component: ComponentCreator('/ios/components/dyte-mic-toggle', 'd8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-more-toggle',
                component: ComponentCreator('/ios/components/dyte-more-toggle', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-name-tag',
                component: ComponentCreator('/ios/components/dyte-name-tag', '089'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-navigationbar',
                component: ComponentCreator('/ios/components/dyte-navigationbar', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-participant-count',
                component: ComponentCreator('/ios/components/dyte-participant-count', 'bb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-participant-tile-view',
                component: ComponentCreator('/ios/components/dyte-participant-tile-view', '2da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-participants',
                component: ComponentCreator('/ios/components/dyte-participants', 'd4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-plugin-view',
                component: ComponentCreator('/ios/components/dyte-plugin-view', 'bcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-plugins',
                component: ComponentCreator('/ios/components/dyte-plugins', '769'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-pluginScreenShareTab-button',
                component: ComponentCreator('/ios/components/dyte-pluginScreenShareTab-button', '6a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-poll-form',
                component: ComponentCreator('/ios/components/dyte-poll-form', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-polls',
                component: ComponentCreator('/ios/components/dyte-polls', 'a09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-recording-indicator',
                component: ComponentCreator('/ios/components/dyte-recording-indicator', 'b18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-settings',
                component: ComponentCreator('/ios/components/dyte-settings', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-setup-screen',
                component: ComponentCreator('/ios/components/dyte-setup-screen', '35f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-setup-screen-delegate',
                component: ComponentCreator('/ios/components/dyte-setup-screen-delegate', '119'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/dyte-webinar-stage-toggle',
                component: ComponentCreator('/ios/components/dyte-webinar-stage-toggle', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/design-system',
                component: ComponentCreator('/ios/design-system', 'a46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/events',
                component: ComponentCreator('/ios/events', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/helper-classes/dyte-plugin-view-model',
                component: ComponentCreator('/ios/helper-classes/dyte-plugin-view-model', '69a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/participants/host-controls',
                component: ComponentCreator('/ios/participants/host-controls', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/participants/introduction',
                component: ComponentCreator('/ios/participants/introduction', '95c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/participants/pre-built-participants-screen',
                component: ComponentCreator('/ios/participants/pre-built-participants-screen', 'ead'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/participants/type-of-participants',
                component: ComponentCreator('/ios/participants/type-of-participants', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Plugins_Guides/load-plugin',
                component: ComponentCreator('/ios/Pre-Built-Plugins_Guides/load-plugin', 'ed8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Plugins_Guides/Plugins',
                component: ComponentCreator('/ios/Pre-Built-Plugins_Guides/Plugins', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Polls_Guides/Polls',
                component: ComponentCreator('/ios/Pre-Built-Polls_Guides/Polls', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Polls_Guides/prebuilt_polls',
                component: ComponentCreator('/ios/Pre-Built-Polls_Guides/prebuilt_polls', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/Pre-Built-Settings_Guides/Settings',
                component: ComponentCreator('/ios/Pre-Built-Settings_Guides/Settings', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/quickstart',
                component: ComponentCreator('/ios/quickstart', 'ae2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/release-notes',
                component: ComponentCreator('/ios/release-notes', '876'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/rendering-participant-video/build-your-own-grid',
                component: ComponentCreator('/ios/rendering-participant-video/build-your-own-grid', 'd67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/rendering-participant-video/using-dyteGrid',
                component: ComponentCreator('/ios/rendering-participant-video/using-dyteGrid', '159'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ios-core',
    component: ComponentCreator('/ios-core', 'd8f'),
    routes: [
      {
        path: '/ios-core',
        component: ComponentCreator('/ios-core', 'a6a'),
        routes: [
          {
            path: '/ios-core/tags',
            component: ComponentCreator('/ios-core/tags', '375'),
            exact: true
          },
          {
            path: '/ios-core/tags/chat',
            component: ComponentCreator('/ios-core/tags/chat', 'c38'),
            exact: true
          },
          {
            path: '/ios-core/tags/create',
            component: ComponentCreator('/ios-core/tags/create', 'e52'),
            exact: true
          },
          {
            path: '/ios-core/tags/ios-core',
            component: ComponentCreator('/ios-core/tags/ios-core', 'ff2'),
            exact: true
          },
          {
            path: '/ios-core/tags/local-user',
            component: ComponentCreator('/ios-core/tags/local-user', '3db'),
            exact: true
          },
          {
            path: '/ios-core/tags/local-user-events',
            component: ComponentCreator('/ios-core/tags/local-user-events', 'a24'),
            exact: true
          },
          {
            path: '/ios-core/tags/participants',
            component: ComponentCreator('/ios-core/tags/participants', '440'),
            exact: true
          },
          {
            path: '/ios-core/tags/plugins',
            component: ComponentCreator('/ios-core/tags/plugins', '5b1'),
            exact: true
          },
          {
            path: '/ios-core/tags/polls',
            component: ComponentCreator('/ios-core/tags/polls', 'cf9'),
            exact: true
          },
          {
            path: '/ios-core/tags/quickstart',
            component: ComponentCreator('/ios-core/tags/quickstart', '4ac'),
            exact: true
          },
          {
            path: '/ios-core/tags/recording',
            component: ComponentCreator('/ios-core/tags/recording', '68d'),
            exact: true
          },
          {
            path: '/ios-core/tags/releasenotes',
            component: ComponentCreator('/ios-core/tags/releasenotes', '79c'),
            exact: true
          },
          {
            path: '/ios-core/tags/room-metadata',
            component: ComponentCreator('/ios-core/tags/room-metadata', 'dd7'),
            exact: true
          },
          {
            path: '/ios-core/tags/self',
            component: ComponentCreator('/ios-core/tags/self', 'fcd'),
            exact: true
          },
          {
            path: '/ios-core/tags/self-events',
            component: ComponentCreator('/ios-core/tags/self-events', '65d'),
            exact: true
          },
          {
            path: '/ios-core/tags/setup',
            component: ComponentCreator('/ios-core/tags/setup', '8ef'),
            exact: true
          },
          {
            path: '/ios-core/tags/stage',
            component: ComponentCreator('/ios-core/tags/stage', '1d6'),
            exact: true
          },
          {
            path: '/ios-core/tags/votes',
            component: ComponentCreator('/ios-core/tags/votes', 'c93'),
            exact: true
          },
          {
            path: '/ios-core/tags/waiting-room',
            component: ComponentCreator('/ios-core/tags/waiting-room', 'c6d'),
            exact: true
          },
          {
            path: '/ios-core/tags/waitlisted',
            component: ComponentCreator('/ios-core/tags/waitlisted', '7d2'),
            exact: true
          },
          {
            path: '/ios-core',
            component: ComponentCreator('/ios-core', '257'),
            routes: [
              {
                path: '/ios-core',
                component: ComponentCreator('/ios-core', '610'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/chat/introduction',
                component: ComponentCreator('/ios-core/chat/introduction', '3bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/chat/receiving-chat-messages',
                component: ComponentCreator('/ios-core/chat/receiving-chat-messages', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/chat/sending-a-chat-message',
                component: ComponentCreator('/ios-core/chat/sending-a-chat-message', 'a8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/error-codes',
                component: ComponentCreator('/ios-core/error-codes', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/Introduction',
                component: ComponentCreator('/ios-core/Introduction', '8b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/livestreaming',
                component: ComponentCreator('/ios-core/livestreaming', 'dc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/events',
                component: ComponentCreator('/ios-core/local-user/events', '552'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/introduction',
                component: ComponentCreator('/ios-core/local-user/introduction', 'd2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/manage-media-devices',
                component: ComponentCreator('/ios-core/local-user/manage-media-devices', '136'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/manage-permissions',
                component: ComponentCreator('/ios-core/local-user/manage-permissions', '9c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/local-user/screen-share-guide',
                component: ComponentCreator('/ios-core/local-user/screen-share-guide', '6fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/participants',
                component: ComponentCreator('/ios-core/participants', '9e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/participants/events',
                component: ComponentCreator('/ios-core/participants/events', '35b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/participants/participant-object',
                component: ComponentCreator('/ios-core/participants/participant-object', '40c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/participants/waitlisted-participants',
                component: ComponentCreator('/ios-core/participants/waitlisted-participants', '368'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/plugins/disable-plugin',
                component: ComponentCreator('/ios-core/plugins/disable-plugin', '352'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/plugins/enable-plugin',
                component: ComponentCreator('/ios-core/plugins/enable-plugin', 'e72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/plugins/extra',
                component: ComponentCreator('/ios-core/plugins/extra', '2fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/plugins/introduction',
                component: ComponentCreator('/ios-core/plugins/introduction', '0d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/polls/creating-a-poll',
                component: ComponentCreator('/ios-core/polls/creating-a-poll', '06a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/polls/introduction',
                component: ComponentCreator('/ios-core/polls/introduction', '299'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/polls/voting-on-a-poll',
                component: ComponentCreator('/ios-core/polls/voting-on-a-poll', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/pre-call/handling-permissions',
                component: ComponentCreator('/ios-core/pre-call/handling-permissions', 'e0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/pre-call/media-preview',
                component: ComponentCreator('/ios-core/pre-call/media-preview', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/pre-call/meeting-meta',
                component: ComponentCreator('/ios-core/pre-call/meeting-meta', '6f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/pre-call/waiting-room',
                component: ComponentCreator('/ios-core/pre-call/waiting-room', 'df3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/recording',
                component: ComponentCreator('/ios-core/recording', '8f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/release-notes',
                component: ComponentCreator('/ios-core/release-notes', 'a1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/room-metadata',
                component: ComponentCreator('/ios-core/room-metadata', 'ee6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/stage-management/host-controls',
                component: ComponentCreator('/ios-core/stage-management/host-controls', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/stage-management/introduction',
                component: ComponentCreator('/ios-core/stage-management/introduction', '617'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios-core/stage-management/viewer-participants',
                component: ComponentCreator('/ios-core/stage-management/viewer-participants', '89e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-sdk',
    component: ComponentCreator('/plugin-sdk', 'e84'),
    routes: [
      {
        path: '/plugin-sdk',
        component: ComponentCreator('/plugin-sdk', '5ed'),
        routes: [
          {
            path: '/plugin-sdk/tags',
            component: ComponentCreator('/plugin-sdk/tags', '09f'),
            exact: true
          },
          {
            path: '/plugin-sdk/tags/installation',
            component: ComponentCreator('/plugin-sdk/tags/installation', 'd95'),
            exact: true
          },
          {
            path: '/plugin-sdk/tags/plugin-sdk',
            component: ComponentCreator('/plugin-sdk/tags/plugin-sdk', '3be'),
            exact: true
          },
          {
            path: '/plugin-sdk/tags/quickstart',
            component: ComponentCreator('/plugin-sdk/tags/quickstart', '9b0'),
            exact: true
          },
          {
            path: '/plugin-sdk/tags/setup',
            component: ComponentCreator('/plugin-sdk/tags/setup', 'b0c'),
            exact: true
          },
          {
            path: '/plugin-sdk',
            component: ComponentCreator('/plugin-sdk', '8e0'),
            routes: [
              {
                path: '/plugin-sdk',
                component: ComponentCreator('/plugin-sdk', '39b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/frequently-asked-questions',
                component: ComponentCreator('/plugin-sdk/frequently-asked-questions', '552'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/guides/exchange-data-between-plugin-and-meeting',
                component: ComponentCreator('/plugin-sdk/guides/exchange-data-between-plugin-and-meeting', 'a33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/guides/how-to-work-with-plugin-stores',
                component: ComponentCreator('/plugin-sdk/guides/how-to-work-with-plugin-stores', 'f07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/quickstart',
                component: ComponentCreator('/plugin-sdk/quickstart', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/create',
                component: ComponentCreator('/plugin-sdk/setup/create', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/customize',
                component: ComponentCreator('/plugin-sdk/setup/customize', '483'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/develop',
                component: ComponentCreator('/plugin-sdk/setup/develop', 'fea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/manage',
                component: ComponentCreator('/plugin-sdk/setup/manage', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/setup/publish',
                component: ComponentCreator('/plugin-sdk/setup/publish', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/basic/events',
                component: ComponentCreator('/plugin-sdk/usage/basic/events', 'cb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/basic/initialize',
                component: ComponentCreator('/plugin-sdk/usage/basic/initialize', 'ceb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/basic/methods',
                component: ComponentCreator('/plugin-sdk/usage/basic/methods', '18c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/installation',
                component: ComponentCreator('/plugin-sdk/usage/installation', '307'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/rooms-api/events',
                component: ComponentCreator('/plugin-sdk/usage/rooms-api/events', 'd5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/rooms-api/methods',
                component: ComponentCreator('/plugin-sdk/usage/rooms-api/methods', 'be8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/stores-api/introduction',
                component: ComponentCreator('/plugin-sdk/usage/stores-api/introduction', '13f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-sdk/usage/stores-api/manage-stores',
                component: ComponentCreator('/plugin-sdk/usage/stores-api/manage-stores', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/react-native',
    component: ComponentCreator('/react-native', 'd32'),
    routes: [
      {
        path: '/react-native',
        component: ComponentCreator('/react-native', '1e8'),
        routes: [
          {
            path: '/react-native/tags',
            component: ComponentCreator('/react-native/tags', 'b4d'),
            exact: true
          },
          {
            path: '/react-native/tags/releasenotes',
            component: ComponentCreator('/react-native/tags/releasenotes', 'e87'),
            exact: true
          },
          {
            path: '/react-native',
            component: ComponentCreator('/react-native', 'cbf'),
            routes: [
              {
                path: '/react-native',
                component: ComponentCreator('/react-native', '3d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/basics/components-basics',
                component: ComponentCreator('/react-native/basics/components-basics', '141'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/basics/display-videos',
                component: ComponentCreator('/react-native/basics/display-videos', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components',
                component: ComponentCreator('/react-native/components', '480'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-avatar',
                component: ComponentCreator('/react-native/components/dyte-avatar', 'c8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-button',
                component: ComponentCreator('/react-native/components/dyte-button', 'b85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-camera-toggle',
                component: ComponentCreator('/react-native/components/dyte-camera-toggle', '8b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-chat',
                component: ComponentCreator('/react-native/components/dyte-chat', '15f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-chat-toggle',
                component: ComponentCreator('/react-native/components/dyte-chat-toggle', 'ccc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-clock',
                component: ComponentCreator('/react-native/components/dyte-clock', '2f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-controlbar',
                component: ComponentCreator('/react-native/components/dyte-controlbar', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-controlbar-button',
                component: ComponentCreator('/react-native/components/dyte-controlbar-button', 'cfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-dialog',
                component: ComponentCreator('/react-native/components/dyte-dialog', '34a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-dialog-manager',
                component: ComponentCreator('/react-native/components/dyte-dialog-manager', '838'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-ended-screen',
                component: ComponentCreator('/react-native/components/dyte-ended-screen', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-file-message',
                component: ComponentCreator('/react-native/components/dyte-file-message', 'cad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-grid',
                component: ComponentCreator('/react-native/components/dyte-grid', '212'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-grid-pagination',
                component: ComponentCreator('/react-native/components/dyte-grid-pagination', 'f2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-header',
                component: ComponentCreator('/react-native/components/dyte-header', '04a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-icon',
                component: ComponentCreator('/react-native/components/dyte-icon', '01c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-idle-screen',
                component: ComponentCreator('/react-native/components/dyte-idle-screen', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-image-message',
                component: ComponentCreator('/react-native/components/dyte-image-message', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-image-viewer',
                component: ComponentCreator('/react-native/components/dyte-image-viewer', '89b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-join-stage',
                component: ComponentCreator('/react-native/components/dyte-join-stage', '925'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-leave-button',
                component: ComponentCreator('/react-native/components/dyte-leave-button', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-leave-meeting',
                component: ComponentCreator('/react-native/components/dyte-leave-meeting', '610'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-logo',
                component: ComponentCreator('/react-native/components/dyte-logo', '260'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-meeting',
                component: ComponentCreator('/react-native/components/dyte-meeting', 'c90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-meeting-title',
                component: ComponentCreator('/react-native/components/dyte-meeting-title', 'bac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-menu',
                component: ComponentCreator('/react-native/components/dyte-menu', '594'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-menu-item',
                component: ComponentCreator('/react-native/components/dyte-menu-item', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-menu-list',
                component: ComponentCreator('/react-native/components/dyte-menu-list', 'e66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-mic-toggle',
                component: ComponentCreator('/react-native/components/dyte-mic-toggle', '592'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-more-toggle',
                component: ComponentCreator('/react-native/components/dyte-more-toggle', 'c09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-mute-all-button',
                component: ComponentCreator('/react-native/components/dyte-mute-all-button', 'e75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-name-tag',
                component: ComponentCreator('/react-native/components/dyte-name-tag', '502'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-notification',
                component: ComponentCreator('/react-native/components/dyte-notification', 'b1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-notifications',
                component: ComponentCreator('/react-native/components/dyte-notifications', '09c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participant',
                component: ComponentCreator('/react-native/components/dyte-participant', '556'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participant-count',
                component: ComponentCreator('/react-native/components/dyte-participant-count', 'ddd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participant-tile',
                component: ComponentCreator('/react-native/components/dyte-participant-tile', '448'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participants',
                component: ComponentCreator('/react-native/components/dyte-participants', 'daa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-participants-toggle',
                component: ComponentCreator('/react-native/components/dyte-participants-toggle', 'fff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-permissions-message',
                component: ComponentCreator('/react-native/components/dyte-permissions-message', '9f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-plugin-main',
                component: ComponentCreator('/react-native/components/dyte-plugin-main', '5cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-plugins',
                component: ComponentCreator('/react-native/components/dyte-plugins', 'd1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-plugins-toggle',
                component: ComponentCreator('/react-native/components/dyte-plugins-toggle', '3e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-poll',
                component: ComponentCreator('/react-native/components/dyte-poll', '30a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-poll-form',
                component: ComponentCreator('/react-native/components/dyte-poll-form', 'd7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-polls',
                component: ComponentCreator('/react-native/components/dyte-polls', 'd7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-polls-toggle',
                component: ComponentCreator('/react-native/components/dyte-polls-toggle', 'd3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-recording-indicator',
                component: ComponentCreator('/react-native/components/dyte-recording-indicator', '85f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-recording-toggle',
                component: ComponentCreator('/react-native/components/dyte-recording-toggle', '596'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-screen-share-toggle',
                component: ComponentCreator('/react-native/components/dyte-screen-share-toggle', '48a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-screenshare-view',
                component: ComponentCreator('/react-native/components/dyte-screenshare-view', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-settings',
                component: ComponentCreator('/react-native/components/dyte-settings', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-settings-audio',
                component: ComponentCreator('/react-native/components/dyte-settings-audio', '8b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-settings-toggle',
                component: ComponentCreator('/react-native/components/dyte-settings-toggle', '1bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-settings-video',
                component: ComponentCreator('/react-native/components/dyte-settings-video', '432'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-setup-screen',
                component: ComponentCreator('/react-native/components/dyte-setup-screen', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-sidebar',
                component: ComponentCreator('/react-native/components/dyte-sidebar', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-simple-grid',
                component: ComponentCreator('/react-native/components/dyte-simple-grid', '453'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-spinner',
                component: ComponentCreator('/react-native/components/dyte-spinner', '804'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-spotlight-grid',
                component: ComponentCreator('/react-native/components/dyte-spotlight-grid', 'd82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-text',
                component: ComponentCreator('/react-native/components/dyte-text', '09c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-text-field',
                component: ComponentCreator('/react-native/components/dyte-text-field', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-waiting-screen',
                component: ComponentCreator('/react-native/components/dyte-waiting-screen', '231'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/dyte-webinar-stage-toggle',
                component: ComponentCreator('/react-native/components/dyte-webinar-stage-toggle', 'f3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/design-system',
                component: ComponentCreator('/react-native/design-system', 'c85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/quickstart',
                component: ComponentCreator('/react-native/quickstart', '0a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference',
                component: ComponentCreator('/react-native/reference', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/classes/DyteNotificationsAudio',
                component: ComponentCreator('/react-native/reference/classes/DyteNotificationsAudio', 'fa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/Notification',
                component: ComponentCreator('/react-native/reference/interfaces/Notification', '73e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/PollObject',
                component: ComponentCreator('/react-native/reference/interfaces/PollObject', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/States',
                component: ComponentCreator('/react-native/reference/interfaces/States', '045'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/UIConfig',
                component: ComponentCreator('/react-native/reference/interfaces/UIConfig', 'd7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/reference/interfaces/UserPreferences',
                component: ComponentCreator('/react-native/reference/interfaces/UserPreferences', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/release-notes',
                component: ComponentCreator('/react-native/release-notes', 'ceb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/using-hooks',
                component: ComponentCreator('/react-native/using-hooks', '592'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/react-ui-kit',
    component: ComponentCreator('/react-ui-kit', 'e85'),
    routes: [
      {
        path: '/react-ui-kit',
        component: ComponentCreator('/react-ui-kit', 'd05'),
        routes: [
          {
            path: '/react-ui-kit/tags',
            component: ComponentCreator('/react-ui-kit/tags', '7c6'),
            exact: true
          },
          {
            path: '/react-ui-kit/tags/releasenotes',
            component: ComponentCreator('/react-ui-kit/tags/releasenotes', 'cb1'),
            exact: true
          },
          {
            path: '/react-ui-kit',
            component: ComponentCreator('/react-ui-kit', 'c6e'),
            routes: [
              {
                path: '/react-ui-kit',
                component: ComponentCreator('/react-ui-kit', '5e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/basics/display-videos',
                component: ComponentCreator('/react-ui-kit/basics/display-videos', '09b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/basics/integrate',
                component: ComponentCreator('/react-ui-kit/basics/integrate', '197'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/add-custom-sidebar',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/add-custom-sidebar', 'ff7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar', '860'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/customize-header',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/customize-header', 'a11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/handling-states-and-configs',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/handling-states-and-configs', 'a5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid', 'd6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/build-your-own/states based UI Split',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/build-your-own/states based UI Split', 'dd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-in-call-ui/default-meeting-ui',
                component: ComponentCreator('/react-ui-kit/build-in-call-ui/default-meeting-ui', '4e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-device',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-device', '43d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-preview',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-preview', 'f43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name', '20f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton', '9d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/build-pre-call-ui/default-setup-screen',
                component: ComponentCreator('/react-ui-kit/build-pre-call-ui/default-setup-screen', '58e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components',
                component: ComponentCreator('/react-ui-kit/components', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-audio-visualizer',
                component: ComponentCreator('/react-ui-kit/components/dyte-audio-visualizer', 'bac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-avatar',
                component: ComponentCreator('/react-ui-kit/components/dyte-avatar', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-button',
                component: ComponentCreator('/react-ui-kit/components/dyte-button', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-camera-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-camera-toggle', '4c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-chat',
                component: ComponentCreator('/react-ui-kit/components/dyte-chat', '131'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-chat-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-chat-toggle', '043'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-clock',
                component: ComponentCreator('/react-ui-kit/components/dyte-clock', '560'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-confirmation-modal',
                component: ComponentCreator('/react-ui-kit/components/dyte-confirmation-modal', '9c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-controlbar',
                component: ComponentCreator('/react-ui-kit/components/dyte-controlbar', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-controlbar-button',
                component: ComponentCreator('/react-ui-kit/components/dyte-controlbar-button', 'a95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-dialog',
                component: ComponentCreator('/react-ui-kit/components/dyte-dialog', 'cc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-dialog-manager',
                component: ComponentCreator('/react-ui-kit/components/dyte-dialog-manager', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-emoji-picker',
                component: ComponentCreator('/react-ui-kit/components/dyte-emoji-picker', 'dca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-ended-screen',
                component: ComponentCreator('/react-ui-kit/components/dyte-ended-screen', '638'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-file-message',
                component: ComponentCreator('/react-ui-kit/components/dyte-file-message', 'a17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-fullscreen-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-fullscreen-toggle', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-grid',
                component: ComponentCreator('/react-ui-kit/components/dyte-grid', 'fd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-grid-pagination',
                component: ComponentCreator('/react-ui-kit/components/dyte-grid-pagination', '064'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-header',
                component: ComponentCreator('/react-ui-kit/components/dyte-header', '76c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-icon',
                component: ComponentCreator('/react-ui-kit/components/dyte-icon', 'e84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-idle-screen',
                component: ComponentCreator('/react-ui-kit/components/dyte-idle-screen', '87a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-image-message',
                component: ComponentCreator('/react-ui-kit/components/dyte-image-message', '7e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-image-viewer',
                component: ComponentCreator('/react-ui-kit/components/dyte-image-viewer', 'b2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-leave-button',
                component: ComponentCreator('/react-ui-kit/components/dyte-leave-button', 'aa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-leave-meeting',
                component: ComponentCreator('/react-ui-kit/components/dyte-leave-meeting', 'eff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-logo',
                component: ComponentCreator('/react-ui-kit/components/dyte-logo', '5d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-meeting',
                component: ComponentCreator('/react-ui-kit/components/dyte-meeting', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-meeting-title',
                component: ComponentCreator('/react-ui-kit/components/dyte-meeting-title', 'a36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-menu',
                component: ComponentCreator('/react-ui-kit/components/dyte-menu', 'd2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-menu-item',
                component: ComponentCreator('/react-ui-kit/components/dyte-menu-item', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-menu-list',
                component: ComponentCreator('/react-ui-kit/components/dyte-menu-list', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-mic-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-mic-toggle', '335'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-mixed-grid',
                component: ComponentCreator('/react-ui-kit/components/dyte-mixed-grid', 'c54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-more-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-more-toggle', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-name-tag',
                component: ComponentCreator('/react-ui-kit/components/dyte-name-tag', 'd32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-network-indicator',
                component: ComponentCreator('/react-ui-kit/components/dyte-network-indicator', '9b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-notification',
                component: ComponentCreator('/react-ui-kit/components/dyte-notification', 'cab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-notifications',
                component: ComponentCreator('/react-ui-kit/components/dyte-notifications', '442'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-overlay-modal',
                component: ComponentCreator('/react-ui-kit/components/dyte-overlay-modal', 'f74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participant',
                component: ComponentCreator('/react-ui-kit/components/dyte-participant', '6e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participant-count',
                component: ComponentCreator('/react-ui-kit/components/dyte-participant-count', '73a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participant-tile',
                component: ComponentCreator('/react-ui-kit/components/dyte-participant-tile', '200'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participants',
                component: ComponentCreator('/react-ui-kit/components/dyte-participants', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participants-audio',
                component: ComponentCreator('/react-ui-kit/components/dyte-participants-audio', '10a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participants-stage-list',
                component: ComponentCreator('/react-ui-kit/components/dyte-participants-stage-list', 'd59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-participants-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-participants-toggle', '8fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-permissions-message',
                component: ComponentCreator('/react-ui-kit/components/dyte-permissions-message', '181'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-plugin-main',
                component: ComponentCreator('/react-ui-kit/components/dyte-plugin-main', 'b6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-plugins',
                component: ComponentCreator('/react-ui-kit/components/dyte-plugins', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-plugins-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-plugins-toggle', 'ca2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-poll',
                component: ComponentCreator('/react-ui-kit/components/dyte-poll', '68e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-poll-form',
                component: ComponentCreator('/react-ui-kit/components/dyte-poll-form', '3b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-polls',
                component: ComponentCreator('/react-ui-kit/components/dyte-polls', '983'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-polls-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-polls-toggle', '947'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-recording-indicator',
                component: ComponentCreator('/react-ui-kit/components/dyte-recording-indicator', '4c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-recording-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-recording-toggle', '76a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-remote-access-manager',
                component: ComponentCreator('/react-ui-kit/components/dyte-remote-access-manager', 'fde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-screen-share-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-screen-share-toggle', 'aaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-screenshare-view',
                component: ComponentCreator('/react-ui-kit/components/dyte-screenshare-view', '345'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-settings',
                component: ComponentCreator('/react-ui-kit/components/dyte-settings', '05d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-settings-audio',
                component: ComponentCreator('/react-ui-kit/components/dyte-settings-audio', '66a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-settings-toggle',
                component: ComponentCreator('/react-ui-kit/components/dyte-settings-toggle', '0c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-settings-video',
                component: ComponentCreator('/react-ui-kit/components/dyte-settings-video', 'c6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-setup-screen',
                component: ComponentCreator('/react-ui-kit/components/dyte-setup-screen', '1d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-sidebar',
                component: ComponentCreator('/react-ui-kit/components/dyte-sidebar', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-simple-grid',
                component: ComponentCreator('/react-ui-kit/components/dyte-simple-grid', '538'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-spinner',
                component: ComponentCreator('/react-ui-kit/components/dyte-spinner', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-spotlight-grid',
                component: ComponentCreator('/react-ui-kit/components/dyte-spotlight-grid', '0dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-stage',
                component: ComponentCreator('/react-ui-kit/components/dyte-stage', '763'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-switch',
                component: ComponentCreator('/react-ui-kit/components/dyte-switch', 'c0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-text-field',
                component: ComponentCreator('/react-ui-kit/components/dyte-text-field', '3bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-text-message',
                component: ComponentCreator('/react-ui-kit/components/dyte-text-message', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-tooltip',
                component: ComponentCreator('/react-ui-kit/components/dyte-tooltip', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/dyte-viewer-count',
                component: ComponentCreator('/react-ui-kit/components/dyte-viewer-count', '6d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/customizations/custom-iconpack',
                component: ComponentCreator('/react-ui-kit/customizations/custom-iconpack', '04a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/customizations/custom-locale',
                component: ComponentCreator('/react-ui-kit/customizations/custom-locale', '1a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/design-system',
                component: ComponentCreator('/react-ui-kit/design-system', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/quickstart',
                component: ComponentCreator('/react-ui-kit/quickstart', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference',
                component: ComponentCreator('/react-ui-kit/reference', '52b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/classes/DyteNotificationsAudio',
                component: ComponentCreator('/react-ui-kit/reference/classes/DyteNotificationsAudio', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/Notification',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/Notification', '760'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/PollObject',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/PollObject', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/States',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/States', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/UIConfig',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/UIConfig', '074'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/reference/interfaces/UserPreferences',
                component: ComponentCreator('/react-ui-kit/reference/interfaces/UserPreferences', 'd9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/release-notes',
                component: ComponentCreator('/react-ui-kit/release-notes', '49c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/using-hooks',
                component: ComponentCreator('/react-ui-kit/using-hooks', 'cdd'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/react-web-core',
    component: ComponentCreator('/react-web-core', 'fdb'),
    routes: [
      {
        path: '/react-web-core',
        component: ComponentCreator('/react-web-core', '089'),
        routes: [
          {
            path: '/react-web-core/tags',
            component: ComponentCreator('/react-web-core/tags', '1a2'),
            exact: true
          },
          {
            path: '/react-web-core/tags/chat',
            component: ComponentCreator('/react-web-core/tags/chat', '1e0'),
            exact: true
          },
          {
            path: '/react-web-core/tags/create',
            component: ComponentCreator('/react-web-core/tags/create', 'afe'),
            exact: true
          },
          {
            path: '/react-web-core/tags/local-user',
            component: ComponentCreator('/react-web-core/tags/local-user', 'cf4'),
            exact: true
          },
          {
            path: '/react-web-core/tags/methods',
            component: ComponentCreator('/react-web-core/tags/methods', '1db'),
            exact: true
          },
          {
            path: '/react-web-core/tags/participant',
            component: ComponentCreator('/react-web-core/tags/participant', 'ef6'),
            exact: true
          },
          {
            path: '/react-web-core/tags/participants',
            component: ComponentCreator('/react-web-core/tags/participants', '644'),
            exact: true
          },
          {
            path: '/react-web-core/tags/plugins',
            component: ComponentCreator('/react-web-core/tags/plugins', 'f92'),
            exact: true
          },
          {
            path: '/react-web-core/tags/polls',
            component: ComponentCreator('/react-web-core/tags/polls', '4aa'),
            exact: true
          },
          {
            path: '/react-web-core/tags/react-web-core',
            component: ComponentCreator('/react-web-core/tags/react-web-core', '731'),
            exact: true
          },
          {
            path: '/react-web-core/tags/recording',
            component: ComponentCreator('/react-web-core/tags/recording', '84b'),
            exact: true
          },
          {
            path: '/react-web-core/tags/releasenotes',
            component: ComponentCreator('/react-web-core/tags/releasenotes', '5cd'),
            exact: true
          },
          {
            path: '/react-web-core/tags/results',
            component: ComponentCreator('/react-web-core/tags/results', '227'),
            exact: true
          },
          {
            path: '/react-web-core/tags/room-metadata',
            component: ComponentCreator('/react-web-core/tags/room-metadata', '7d0'),
            exact: true
          },
          {
            path: '/react-web-core/tags/self',
            component: ComponentCreator('/react-web-core/tags/self', '96a'),
            exact: true
          },
          {
            path: '/react-web-core/tags/self-events',
            component: ComponentCreator('/react-web-core/tags/self-events', 'd1a'),
            exact: true
          },
          {
            path: '/react-web-core/tags/updates',
            component: ComponentCreator('/react-web-core/tags/updates', '0a0'),
            exact: true
          },
          {
            path: '/react-web-core/tags/votes',
            component: ComponentCreator('/react-web-core/tags/votes', 'cda'),
            exact: true
          },
          {
            path: '/react-web-core/tags/web-core',
            component: ComponentCreator('/react-web-core/tags/web-core', '625'),
            exact: true
          },
          {
            path: '/react-web-core',
            component: ComponentCreator('/react-web-core', '13b'),
            routes: [
              {
                path: '/react-web-core',
                component: ComponentCreator('/react-web-core', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/advanced/advance',
                component: ComponentCreator('/react-web-core/advanced/advance', '719'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/edit-chat-messages',
                component: ComponentCreator('/react-web-core/chat/edit-chat-messages', 'd1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/introduction',
                component: ComponentCreator('/react-web-core/chat/introduction', '6e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/other-chat-functions',
                component: ComponentCreator('/react-web-core/chat/other-chat-functions', '2ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/receiving-chat-messages',
                component: ComponentCreator('/react-web-core/chat/receiving-chat-messages', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/chat/sending-a-chat-message',
                component: ComponentCreator('/react-web-core/chat/sending-a-chat-message', '79f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/error-codes/error-code',
                component: ComponentCreator('/react-web-core/error-codes/error-code', '6a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/error-codes/error-code-zero-ten',
                component: ComponentCreator('/react-web-core/error-codes/error-code-zero-ten', '511'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/introduction',
                component: ComponentCreator('/react-web-core/introduction', '2af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/livestreaming',
                component: ComponentCreator('/react-web-core/livestreaming', '499'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/events',
                component: ComponentCreator('/react-web-core/local-user/events', '6c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/extras',
                component: ComponentCreator('/react-web-core/local-user/extras', 'a5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/introduction',
                component: ComponentCreator('/react-web-core/local-user/introduction', '09e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/manage-media-devices',
                component: ComponentCreator('/react-web-core/local-user/manage-media-devices', 'ffa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/local-user/media-permission-errors',
                component: ComponentCreator('/react-web-core/local-user/media-permission-errors', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants',
                component: ComponentCreator('/react-web-core/participants', 'e10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants/events',
                component: ComponentCreator('/react-web-core/participants/events', '7c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants/participant-object',
                component: ComponentCreator('/react-web-core/participants/participant-object', 'ff7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants/permissions',
                component: ComponentCreator('/react-web-core/participants/permissions', '19f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/participants/pip',
                component: ComponentCreator('/react-web-core/participants/pip', 'b94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/plugins/disable-plugin',
                component: ComponentCreator('/react-web-core/plugins/disable-plugin', '832'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/plugins/enable-plugin',
                component: ComponentCreator('/react-web-core/plugins/enable-plugin', '110'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/plugins/extra',
                component: ComponentCreator('/react-web-core/plugins/extra', 'fa2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/plugins/introduction',
                component: ComponentCreator('/react-web-core/plugins/introduction', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/polls/creating-a-poll',
                component: ComponentCreator('/react-web-core/polls/creating-a-poll', '503'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/polls/introduction',
                component: ComponentCreator('/react-web-core/polls/introduction', '93a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/polls/other-poll-functions',
                component: ComponentCreator('/react-web-core/polls/other-poll-functions', '1e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/polls/voting-on-a-poll',
                component: ComponentCreator('/react-web-core/polls/voting-on-a-poll', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/handling-permissions',
                component: ComponentCreator('/react-web-core/pre-call/handling-permissions', 'f51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/media-preview',
                component: ComponentCreator('/react-web-core/pre-call/media-preview', 'c14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/meeting-meta',
                component: ComponentCreator('/react-web-core/pre-call/meeting-meta', '090'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/virtual-bg',
                component: ComponentCreator('/react-web-core/pre-call/virtual-bg', '808'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/pre-call/waiting-room',
                component: ComponentCreator('/react-web-core/pre-call/waiting-room', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/recording',
                component: ComponentCreator('/react-web-core/recording', '1b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteAi',
                component: ComponentCreator('/react-web-core/reference/DyteAi', 'a2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteChat',
                component: ComponentCreator('/react-web-core/reference/DyteChat', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteClient',
                component: ComponentCreator('/react-web-core/reference/DyteClient', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteConnectedMeetings',
                component: ComponentCreator('/react-web-core/reference/DyteConnectedMeetings', '05d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteLivestream',
                component: ComponentCreator('/react-web-core/reference/DyteLivestream', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteMeta',
                component: ComponentCreator('/react-web-core/reference/DyteMeta', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteParticipant',
                component: ComponentCreator('/react-web-core/reference/DyteParticipant', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteParticipantMap',
                component: ComponentCreator('/react-web-core/reference/DyteParticipantMap', '8d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteParticipants',
                component: ComponentCreator('/react-web-core/reference/DyteParticipants', 'd80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePermissionsPreset',
                component: ComponentCreator('/react-web-core/reference/DytePermissionsPreset', '5da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePlugin',
                component: ComponentCreator('/react-web-core/reference/DytePlugin', 'a8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePluginMap',
                component: ComponentCreator('/react-web-core/reference/DytePluginMap', 'd34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePlugins',
                component: ComponentCreator('/react-web-core/reference/DytePlugins', '80d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DytePolls',
                component: ComponentCreator('/react-web-core/reference/DytePolls', 'e66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteRecording',
                component: ComponentCreator('/react-web-core/reference/DyteRecording', '26b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteRemote',
                component: ComponentCreator('/react-web-core/reference/DyteRemote', 'a24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteSelf',
                component: ComponentCreator('/react-web-core/reference/DyteSelf', 'f0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteSelfMedia',
                component: ComponentCreator('/react-web-core/reference/DyteSelfMedia', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteStage',
                component: ComponentCreator('/react-web-core/reference/DyteStage', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/DyteThemePreset',
                component: ComponentCreator('/react-web-core/reference/DyteThemePreset', '5c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/release-notes',
                component: ComponentCreator('/react-web-core/release-notes', '970'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/room-metadata',
                component: ComponentCreator('/react-web-core/room-metadata', 'e9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/stage',
                component: ComponentCreator('/react-web-core/stage', 'a7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/rn-core',
    component: ComponentCreator('/rn-core', 'c17'),
    routes: [
      {
        path: '/rn-core',
        component: ComponentCreator('/rn-core', '9dc'),
        routes: [
          {
            path: '/rn-core/tags',
            component: ComponentCreator('/rn-core/tags', '0a1'),
            exact: true
          },
          {
            path: '/rn-core/tags/chat',
            component: ComponentCreator('/rn-core/tags/chat', 'a46'),
            exact: true
          },
          {
            path: '/rn-core/tags/create',
            component: ComponentCreator('/rn-core/tags/create', '34e'),
            exact: true
          },
          {
            path: '/rn-core/tags/installation',
            component: ComponentCreator('/rn-core/tags/installation', '34e'),
            exact: true
          },
          {
            path: '/rn-core/tags/local-user',
            component: ComponentCreator('/rn-core/tags/local-user', '68b'),
            exact: true
          },
          {
            path: '/rn-core/tags/methods',
            component: ComponentCreator('/rn-core/tags/methods', 'dfe'),
            exact: true
          },
          {
            path: '/rn-core/tags/participant',
            component: ComponentCreator('/rn-core/tags/participant', 'd88'),
            exact: true
          },
          {
            path: '/rn-core/tags/participants',
            component: ComponentCreator('/rn-core/tags/participants', '60b'),
            exact: true
          },
          {
            path: '/rn-core/tags/plugins',
            component: ComponentCreator('/rn-core/tags/plugins', '58c'),
            exact: true
          },
          {
            path: '/rn-core/tags/polls',
            component: ComponentCreator('/rn-core/tags/polls', '3f2'),
            exact: true
          },
          {
            path: '/rn-core/tags/quickstart',
            component: ComponentCreator('/rn-core/tags/quickstart', 'a03'),
            exact: true
          },
          {
            path: '/rn-core/tags/recording',
            component: ComponentCreator('/rn-core/tags/recording', '691'),
            exact: true
          },
          {
            path: '/rn-core/tags/releasenotes',
            component: ComponentCreator('/rn-core/tags/releasenotes', 'fa6'),
            exact: true
          },
          {
            path: '/rn-core/tags/results',
            component: ComponentCreator('/rn-core/tags/results', '93f'),
            exact: true
          },
          {
            path: '/rn-core/tags/rn-core',
            component: ComponentCreator('/rn-core/tags/rn-core', 'be9'),
            exact: true
          },
          {
            path: '/rn-core/tags/room-metadata',
            component: ComponentCreator('/rn-core/tags/room-metadata', '14a'),
            exact: true
          },
          {
            path: '/rn-core/tags/self',
            component: ComponentCreator('/rn-core/tags/self', '9f6'),
            exact: true
          },
          {
            path: '/rn-core/tags/self-events',
            component: ComponentCreator('/rn-core/tags/self-events', '28e'),
            exact: true
          },
          {
            path: '/rn-core/tags/setup',
            component: ComponentCreator('/rn-core/tags/setup', '661'),
            exact: true
          },
          {
            path: '/rn-core/tags/updates',
            component: ComponentCreator('/rn-core/tags/updates', 'e1f'),
            exact: true
          },
          {
            path: '/rn-core/tags/votes',
            component: ComponentCreator('/rn-core/tags/votes', '020'),
            exact: true
          },
          {
            path: '/rn-core/tags/web-core',
            component: ComponentCreator('/rn-core/tags/web-core', '37f'),
            exact: true
          },
          {
            path: '/rn-core',
            component: ComponentCreator('/rn-core', '141'),
            routes: [
              {
                path: '/rn-core',
                component: ComponentCreator('/rn-core', 'bbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/edit-chat-messages',
                component: ComponentCreator('/rn-core/chat/edit-chat-messages', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/introduction',
                component: ComponentCreator('/rn-core/chat/introduction', '90a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/other-chat-functions',
                component: ComponentCreator('/rn-core/chat/other-chat-functions', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/receiving-chat-messages',
                component: ComponentCreator('/rn-core/chat/receiving-chat-messages', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/chat/sending-a-chat-message',
                component: ComponentCreator('/rn-core/chat/sending-a-chat-message', '1df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/error-codes/error-code',
                component: ComponentCreator('/rn-core/error-codes/error-code', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/error-codes/error-code-zero-ten',
                component: ComponentCreator('/rn-core/error-codes/error-code-zero-ten', 'd26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/livestreaming',
                component: ComponentCreator('/rn-core/livestreaming', 'a0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/events',
                component: ComponentCreator('/rn-core/local-user/events', 'dba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/extras',
                component: ComponentCreator('/rn-core/local-user/extras', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/introduction',
                component: ComponentCreator('/rn-core/local-user/introduction', '4ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/manage-media-devices',
                component: ComponentCreator('/rn-core/local-user/manage-media-devices', 'f8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/local-user/media-permission-errors',
                component: ComponentCreator('/rn-core/local-user/media-permission-errors', 'a5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/participants',
                component: ComponentCreator('/rn-core/participants', 'c98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/participants/events',
                component: ComponentCreator('/rn-core/participants/events', '2eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/participants/participant-object',
                component: ComponentCreator('/rn-core/participants/participant-object', '2d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/participants/permissions',
                component: ComponentCreator('/rn-core/participants/permissions', 'a66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/plugins/disable-plugin',
                component: ComponentCreator('/rn-core/plugins/disable-plugin', '676'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/plugins/enable-plugin',
                component: ComponentCreator('/rn-core/plugins/enable-plugin', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/plugins/extra',
                component: ComponentCreator('/rn-core/plugins/extra', '8db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/plugins/introduction',
                component: ComponentCreator('/rn-core/plugins/introduction', 'b1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/polls/creating-a-poll',
                component: ComponentCreator('/rn-core/polls/creating-a-poll', '1a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/polls/introduction',
                component: ComponentCreator('/rn-core/polls/introduction', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/polls/other-poll-functions',
                component: ComponentCreator('/rn-core/polls/other-poll-functions', 'bd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/polls/voting-on-a-poll',
                component: ComponentCreator('/rn-core/polls/voting-on-a-poll', '556'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/pre-call/handling-permissions',
                component: ComponentCreator('/rn-core/pre-call/handling-permissions', '495'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/pre-call/media-preview',
                component: ComponentCreator('/rn-core/pre-call/media-preview', '8b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/pre-call/meeting-meta',
                component: ComponentCreator('/rn-core/pre-call/meeting-meta', '42a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/pre-call/waiting-room',
                component: ComponentCreator('/rn-core/pre-call/waiting-room', '9fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/quickstart',
                component: ComponentCreator('/rn-core/quickstart', '24c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/recording',
                component: ComponentCreator('/rn-core/recording', '2c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteAi',
                component: ComponentCreator('/rn-core/reference/DyteAi', 'a73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteChat',
                component: ComponentCreator('/rn-core/reference/DyteChat', '67b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteClient',
                component: ComponentCreator('/rn-core/reference/DyteClient', 'e19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteConnectedMeetings',
                component: ComponentCreator('/rn-core/reference/DyteConnectedMeetings', '07d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteLivestream',
                component: ComponentCreator('/rn-core/reference/DyteLivestream', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteMeta',
                component: ComponentCreator('/rn-core/reference/DyteMeta', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteParticipant',
                component: ComponentCreator('/rn-core/reference/DyteParticipant', '50d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteParticipantMap',
                component: ComponentCreator('/rn-core/reference/DyteParticipantMap', '19e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteParticipants',
                component: ComponentCreator('/rn-core/reference/DyteParticipants', '79c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePermissionsPreset',
                component: ComponentCreator('/rn-core/reference/DytePermissionsPreset', 'cff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePlugin',
                component: ComponentCreator('/rn-core/reference/DytePlugin', '4db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePluginMap',
                component: ComponentCreator('/rn-core/reference/DytePluginMap', 'dbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePlugins',
                component: ComponentCreator('/rn-core/reference/DytePlugins', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DytePolls',
                component: ComponentCreator('/rn-core/reference/DytePolls', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteRecording',
                component: ComponentCreator('/rn-core/reference/DyteRecording', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteRemote',
                component: ComponentCreator('/rn-core/reference/DyteRemote', 'd1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteSelf',
                component: ComponentCreator('/rn-core/reference/DyteSelf', 'faa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteSelfMedia',
                component: ComponentCreator('/rn-core/reference/DyteSelfMedia', 'b40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteStage',
                component: ComponentCreator('/rn-core/reference/DyteStage', '4fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/DyteThemePreset',
                component: ComponentCreator('/rn-core/reference/DyteThemePreset', '484'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/release-notes',
                component: ComponentCreator('/rn-core/release-notes', '319'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/room-metadata',
                component: ComponentCreator('/rn-core/room-metadata', '741'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/stage',
                component: ComponentCreator('/rn-core/stage', 'ff9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ui-kit',
    component: ComponentCreator('/ui-kit', 'c0d'),
    routes: [
      {
        path: '/ui-kit',
        component: ComponentCreator('/ui-kit', '8c9'),
        routes: [
          {
            path: '/ui-kit/tags',
            component: ComponentCreator('/ui-kit/tags', '39c'),
            exact: true
          },
          {
            path: '/ui-kit/tags/releasenotes',
            component: ComponentCreator('/ui-kit/tags/releasenotes', '837'),
            exact: true
          },
          {
            path: '/ui-kit',
            component: ComponentCreator('/ui-kit', '1b8'),
            routes: [
              {
                path: '/ui-kit',
                component: ComponentCreator('/ui-kit', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/basics/components-basics',
                component: ComponentCreator('/ui-kit/basics/components-basics', '4a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/basics/pre-requisite',
                component: ComponentCreator('/ui-kit/basics/pre-requisite', 'cdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components',
                component: ComponentCreator('/ui-kit/components', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-audio-visualizer',
                component: ComponentCreator('/ui-kit/components/dyte-audio-visualizer', '04d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-avatar',
                component: ComponentCreator('/ui-kit/components/dyte-avatar', '47a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-button',
                component: ComponentCreator('/ui-kit/components/dyte-button', '730'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-camera-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-camera-toggle', 'ec0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-chat',
                component: ComponentCreator('/ui-kit/components/dyte-chat', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-chat-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-chat-toggle', 'b52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-clock',
                component: ComponentCreator('/ui-kit/components/dyte-clock', '998'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-confirmation-modal',
                component: ComponentCreator('/ui-kit/components/dyte-confirmation-modal', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-controlbar',
                component: ComponentCreator('/ui-kit/components/dyte-controlbar', 'ff5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-controlbar-button',
                component: ComponentCreator('/ui-kit/components/dyte-controlbar-button', '0bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-dialog',
                component: ComponentCreator('/ui-kit/components/dyte-dialog', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-dialog-manager',
                component: ComponentCreator('/ui-kit/components/dyte-dialog-manager', '4eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-emoji-picker',
                component: ComponentCreator('/ui-kit/components/dyte-emoji-picker', 'cf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-ended-screen',
                component: ComponentCreator('/ui-kit/components/dyte-ended-screen', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-file-message',
                component: ComponentCreator('/ui-kit/components/dyte-file-message', '36a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-fullscreen-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-fullscreen-toggle', 'c3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-grid',
                component: ComponentCreator('/ui-kit/components/dyte-grid', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-grid-pagination',
                component: ComponentCreator('/ui-kit/components/dyte-grid-pagination', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-header',
                component: ComponentCreator('/ui-kit/components/dyte-header', '6ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-icon',
                component: ComponentCreator('/ui-kit/components/dyte-icon', 'd6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-idle-screen',
                component: ComponentCreator('/ui-kit/components/dyte-idle-screen', 'fa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-image-message',
                component: ComponentCreator('/ui-kit/components/dyte-image-message', '6d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-image-viewer',
                component: ComponentCreator('/ui-kit/components/dyte-image-viewer', '706'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-leave-button',
                component: ComponentCreator('/ui-kit/components/dyte-leave-button', '11c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-leave-meeting',
                component: ComponentCreator('/ui-kit/components/dyte-leave-meeting', 'bc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-logo',
                component: ComponentCreator('/ui-kit/components/dyte-logo', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-meeting',
                component: ComponentCreator('/ui-kit/components/dyte-meeting', '6bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-meeting-title',
                component: ComponentCreator('/ui-kit/components/dyte-meeting-title', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-menu',
                component: ComponentCreator('/ui-kit/components/dyte-menu', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-menu-item',
                component: ComponentCreator('/ui-kit/components/dyte-menu-item', '3d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-menu-list',
                component: ComponentCreator('/ui-kit/components/dyte-menu-list', '237'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-mic-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-mic-toggle', '53e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-mixed-grid',
                component: ComponentCreator('/ui-kit/components/dyte-mixed-grid', '742'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-more-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-more-toggle', 'f5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-name-tag',
                component: ComponentCreator('/ui-kit/components/dyte-name-tag', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-network-indicator',
                component: ComponentCreator('/ui-kit/components/dyte-network-indicator', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-notification',
                component: ComponentCreator('/ui-kit/components/dyte-notification', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-notifications',
                component: ComponentCreator('/ui-kit/components/dyte-notifications', '2b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-overlay-modal',
                component: ComponentCreator('/ui-kit/components/dyte-overlay-modal', 'b2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participant',
                component: ComponentCreator('/ui-kit/components/dyte-participant', 'cf3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participant-count',
                component: ComponentCreator('/ui-kit/components/dyte-participant-count', 'dbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participant-tile',
                component: ComponentCreator('/ui-kit/components/dyte-participant-tile', '860'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participants',
                component: ComponentCreator('/ui-kit/components/dyte-participants', '010'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participants-audio',
                component: ComponentCreator('/ui-kit/components/dyte-participants-audio', '7fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participants-stage-list',
                component: ComponentCreator('/ui-kit/components/dyte-participants-stage-list', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-participants-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-participants-toggle', 'a78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-permissions-message',
                component: ComponentCreator('/ui-kit/components/dyte-permissions-message', 'eea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-plugin-main',
                component: ComponentCreator('/ui-kit/components/dyte-plugin-main', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-plugins',
                component: ComponentCreator('/ui-kit/components/dyte-plugins', 'bf7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-plugins-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-plugins-toggle', '66e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-poll',
                component: ComponentCreator('/ui-kit/components/dyte-poll', '555'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-poll-form',
                component: ComponentCreator('/ui-kit/components/dyte-poll-form', '596'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-polls',
                component: ComponentCreator('/ui-kit/components/dyte-polls', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-polls-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-polls-toggle', '573'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-recording-indicator',
                component: ComponentCreator('/ui-kit/components/dyte-recording-indicator', '71f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-recording-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-recording-toggle', 'a3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-remote-access-manager',
                component: ComponentCreator('/ui-kit/components/dyte-remote-access-manager', 'e17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-screen-share-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-screen-share-toggle', 'bfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-screenshare-view',
                component: ComponentCreator('/ui-kit/components/dyte-screenshare-view', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-settings',
                component: ComponentCreator('/ui-kit/components/dyte-settings', 'b2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-settings-audio',
                component: ComponentCreator('/ui-kit/components/dyte-settings-audio', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-settings-toggle',
                component: ComponentCreator('/ui-kit/components/dyte-settings-toggle', '599'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-settings-video',
                component: ComponentCreator('/ui-kit/components/dyte-settings-video', '3cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-setup-screen',
                component: ComponentCreator('/ui-kit/components/dyte-setup-screen', '220'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-sidebar',
                component: ComponentCreator('/ui-kit/components/dyte-sidebar', 'b0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-simple-grid',
                component: ComponentCreator('/ui-kit/components/dyte-simple-grid', 'ff9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-spinner',
                component: ComponentCreator('/ui-kit/components/dyte-spinner', 'e6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-spotlight-grid',
                component: ComponentCreator('/ui-kit/components/dyte-spotlight-grid', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-stage',
                component: ComponentCreator('/ui-kit/components/dyte-stage', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-switch',
                component: ComponentCreator('/ui-kit/components/dyte-switch', 'a82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-text-field',
                component: ComponentCreator('/ui-kit/components/dyte-text-field', '783'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-text-message',
                component: ComponentCreator('/ui-kit/components/dyte-text-message', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-tooltip',
                component: ComponentCreator('/ui-kit/components/dyte-tooltip', '9bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/dyte-viewer-count',
                component: ComponentCreator('/ui-kit/components/dyte-viewer-count', 'da0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/customizations/custom-iconpack',
                component: ComponentCreator('/ui-kit/customizations/custom-iconpack', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/customizations/custom-locale',
                component: ComponentCreator('/ui-kit/customizations/custom-locale', '84a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/design-system',
                component: ComponentCreator('/ui-kit/design-system', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/quickstart',
                component: ComponentCreator('/ui-kit/quickstart', 'ff3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference',
                component: ComponentCreator('/ui-kit/reference', 'a4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/classes/DyteNotificationsAudio',
                component: ComponentCreator('/ui-kit/reference/classes/DyteNotificationsAudio', '5fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/Notification',
                component: ComponentCreator('/ui-kit/reference/interfaces/Notification', '450'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/PollObject',
                component: ComponentCreator('/ui-kit/reference/interfaces/PollObject', '1cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/States',
                component: ComponentCreator('/ui-kit/reference/interfaces/States', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/UIConfig',
                component: ComponentCreator('/ui-kit/reference/interfaces/UIConfig', '4dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/reference/interfaces/UserPreferences',
                component: ComponentCreator('/ui-kit/reference/interfaces/UserPreferences', '3f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/release-notes',
                component: ComponentCreator('/ui-kit/release-notes', 'b3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/web-core',
    component: ComponentCreator('/web-core', 'e99'),
    routes: [
      {
        path: '/web-core',
        component: ComponentCreator('/web-core', 'e52'),
        routes: [
          {
            path: '/web-core/tags',
            component: ComponentCreator('/web-core/tags', 'f66'),
            exact: true
          },
          {
            path: '/web-core/tags/chat',
            component: ComponentCreator('/web-core/tags/chat', 'ca9'),
            exact: true
          },
          {
            path: '/web-core/tags/create',
            component: ComponentCreator('/web-core/tags/create', '6c9'),
            exact: true
          },
          {
            path: '/web-core/tags/local-user',
            component: ComponentCreator('/web-core/tags/local-user', '3f3'),
            exact: true
          },
          {
            path: '/web-core/tags/methods',
            component: ComponentCreator('/web-core/tags/methods', '870'),
            exact: true
          },
          {
            path: '/web-core/tags/participant',
            component: ComponentCreator('/web-core/tags/participant', '060'),
            exact: true
          },
          {
            path: '/web-core/tags/participants',
            component: ComponentCreator('/web-core/tags/participants', '880'),
            exact: true
          },
          {
            path: '/web-core/tags/plugins',
            component: ComponentCreator('/web-core/tags/plugins', 'd04'),
            exact: true
          },
          {
            path: '/web-core/tags/polls',
            component: ComponentCreator('/web-core/tags/polls', 'bc9'),
            exact: true
          },
          {
            path: '/web-core/tags/quickstart',
            component: ComponentCreator('/web-core/tags/quickstart', '2e6'),
            exact: true
          },
          {
            path: '/web-core/tags/recording',
            component: ComponentCreator('/web-core/tags/recording', '5da'),
            exact: true
          },
          {
            path: '/web-core/tags/releasenotes',
            component: ComponentCreator('/web-core/tags/releasenotes', '378'),
            exact: true
          },
          {
            path: '/web-core/tags/results',
            component: ComponentCreator('/web-core/tags/results', '57b'),
            exact: true
          },
          {
            path: '/web-core/tags/room-metadata',
            component: ComponentCreator('/web-core/tags/room-metadata', '201'),
            exact: true
          },
          {
            path: '/web-core/tags/self',
            component: ComponentCreator('/web-core/tags/self', '7ea'),
            exact: true
          },
          {
            path: '/web-core/tags/self-events',
            component: ComponentCreator('/web-core/tags/self-events', '95f'),
            exact: true
          },
          {
            path: '/web-core/tags/setup',
            component: ComponentCreator('/web-core/tags/setup', '726'),
            exact: true
          },
          {
            path: '/web-core/tags/updates',
            component: ComponentCreator('/web-core/tags/updates', 'c8c'),
            exact: true
          },
          {
            path: '/web-core/tags/votes',
            component: ComponentCreator('/web-core/tags/votes', 'a84'),
            exact: true
          },
          {
            path: '/web-core/tags/web-core',
            component: ComponentCreator('/web-core/tags/web-core', 'a66'),
            exact: true
          },
          {
            path: '/web-core',
            component: ComponentCreator('/web-core', 'b35'),
            routes: [
              {
                path: '/web-core',
                component: ComponentCreator('/web-core', 'b5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/advanced/advance',
                component: ComponentCreator('/web-core/advanced/advance', '634'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/edit-chat-messages',
                component: ComponentCreator('/web-core/chat/edit-chat-messages', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/introduction',
                component: ComponentCreator('/web-core/chat/introduction', 'b01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/other-chat-functions',
                component: ComponentCreator('/web-core/chat/other-chat-functions', 'e28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/receiving-chat-messages',
                component: ComponentCreator('/web-core/chat/receiving-chat-messages', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/chat/sending-a-chat-message',
                component: ComponentCreator('/web-core/chat/sending-a-chat-message', 'cc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/error-codes/error-code',
                component: ComponentCreator('/web-core/error-codes/error-code', '13d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/error-codes/error-code-zero-ten',
                component: ComponentCreator('/web-core/error-codes/error-code-zero-ten', '6ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/Introduction',
                component: ComponentCreator('/web-core/Introduction', '547'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/livestreaming',
                component: ComponentCreator('/web-core/livestreaming', '95a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/events',
                component: ComponentCreator('/web-core/local-user/events', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/extras',
                component: ComponentCreator('/web-core/local-user/extras', '2b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/introduction',
                component: ComponentCreator('/web-core/local-user/introduction', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/manage-media-devices',
                component: ComponentCreator('/web-core/local-user/manage-media-devices', 'a3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/local-user/media-permission-errors',
                component: ComponentCreator('/web-core/local-user/media-permission-errors', '7c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants',
                component: ComponentCreator('/web-core/participants', '60b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants/events',
                component: ComponentCreator('/web-core/participants/events', 'b65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants/participant-object',
                component: ComponentCreator('/web-core/participants/participant-object', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants/permissions',
                component: ComponentCreator('/web-core/participants/permissions', '97b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/participants/pip',
                component: ComponentCreator('/web-core/participants/pip', '99c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/plugins/disable-plugin',
                component: ComponentCreator('/web-core/plugins/disable-plugin', '6b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/plugins/enable-plugin',
                component: ComponentCreator('/web-core/plugins/enable-plugin', 'c2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/plugins/extra',
                component: ComponentCreator('/web-core/plugins/extra', '237'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/plugins/introduction',
                component: ComponentCreator('/web-core/plugins/introduction', '002'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/polls/creating-a-poll',
                component: ComponentCreator('/web-core/polls/creating-a-poll', '5a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/polls/introduction',
                component: ComponentCreator('/web-core/polls/introduction', '6a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/polls/other-poll-functions',
                component: ComponentCreator('/web-core/polls/other-poll-functions', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/polls/voting-on-a-poll',
                component: ComponentCreator('/web-core/polls/voting-on-a-poll', '2e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/handling-permissions',
                component: ComponentCreator('/web-core/pre-call/handling-permissions', '36b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/media-preview',
                component: ComponentCreator('/web-core/pre-call/media-preview', '823'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/meeting-meta',
                component: ComponentCreator('/web-core/pre-call/meeting-meta', 'a33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/virtual-bg',
                component: ComponentCreator('/web-core/pre-call/virtual-bg', 'af6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/pre-call/waiting-room',
                component: ComponentCreator('/web-core/pre-call/waiting-room', '635'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/recording',
                component: ComponentCreator('/web-core/recording', 'b29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteAi',
                component: ComponentCreator('/web-core/reference/DyteAi', '185'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteChat',
                component: ComponentCreator('/web-core/reference/DyteChat', '502'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteClient',
                component: ComponentCreator('/web-core/reference/DyteClient', '210'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteConnectedMeetings',
                component: ComponentCreator('/web-core/reference/DyteConnectedMeetings', '82e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteLivestream',
                component: ComponentCreator('/web-core/reference/DyteLivestream', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteMeta',
                component: ComponentCreator('/web-core/reference/DyteMeta', 'c54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteParticipant',
                component: ComponentCreator('/web-core/reference/DyteParticipant', 'b1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteParticipantMap',
                component: ComponentCreator('/web-core/reference/DyteParticipantMap', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteParticipants',
                component: ComponentCreator('/web-core/reference/DyteParticipants', '75b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePermissionsPreset',
                component: ComponentCreator('/web-core/reference/DytePermissionsPreset', 'baf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePlugin',
                component: ComponentCreator('/web-core/reference/DytePlugin', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePluginMap',
                component: ComponentCreator('/web-core/reference/DytePluginMap', 'e96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePlugins',
                component: ComponentCreator('/web-core/reference/DytePlugins', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DytePolls',
                component: ComponentCreator('/web-core/reference/DytePolls', '533'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteRecording',
                component: ComponentCreator('/web-core/reference/DyteRecording', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteRemote',
                component: ComponentCreator('/web-core/reference/DyteRemote', '27a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteSelf',
                component: ComponentCreator('/web-core/reference/DyteSelf', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteSelfMedia',
                component: ComponentCreator('/web-core/reference/DyteSelfMedia', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteStage',
                component: ComponentCreator('/web-core/reference/DyteStage', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/DyteThemePreset',
                component: ComponentCreator('/web-core/reference/DyteThemePreset', 'a0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/release-notes',
                component: ComponentCreator('/web-core/release-notes', 'd51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/room-metadata',
                component: ComponentCreator('/web-core/room-metadata', '50f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/stage',
                component: ComponentCreator('/web-core/stage', '5bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e12'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
