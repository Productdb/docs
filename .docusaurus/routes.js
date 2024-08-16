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
    component: ComponentCreator('/android', 'ed5'),
    routes: [
      {
        path: '/android',
        component: ComponentCreator('/android', '36d'),
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
            component: ComponentCreator('/android', '91d'),
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
                path: '/android/components/productdb-audio-selector',
                component: ComponentCreator('/android/components/productdb-audio-selector', 'd1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-audio-visualizer',
                component: ComponentCreator('/android/components/productdb-audio-visualizer', 'fe3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-avatar',
                component: ComponentCreator('/android/components/productdb-avatar', '52c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-button',
                component: ComponentCreator('/android/components/productdb-button', '5cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-camera-toggle',
                component: ComponentCreator('/android/components/productdb-camera-toggle', '19b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-chat',
                component: ComponentCreator('/android/components/productdb-chat', '8c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-clock',
                component: ComponentCreator('/android/components/productdb-clock', '5c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-controlbar-button',
                component: ComponentCreator('/android/components/productdb-controlbar-button', 'ae8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-grid',
                component: ComponentCreator('/android/components/productdb-grid', '2b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-grid-pagination',
                component: ComponentCreator('/android/components/productdb-grid-pagination', 'a2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-idle-screen',
                component: ComponentCreator('/android/components/productdb-idle-screen', '8ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-join-stage',
                component: ComponentCreator('/android/components/productdb-join-stage', 'b1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-leave-button',
                component: ComponentCreator('/android/components/productdb-leave-button', 'f62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-leave-meeting',
                component: ComponentCreator('/android/components/productdb-leave-meeting', '3e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-meeting',
                component: ComponentCreator('/android/components/productdb-meeting', 'f21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-meeting-title',
                component: ComponentCreator('/android/components/productdb-meeting-title', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-mic-toggle',
                component: ComponentCreator('/android/components/productdb-mic-toggle', '9fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-more-toggle',
                component: ComponentCreator('/android/components/productdb-more-toggle', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-name-tag',
                component: ComponentCreator('/android/components/productdb-name-tag', '53b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-participant-count',
                component: ComponentCreator('/android/components/productdb-participant-count', '527'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-participants',
                component: ComponentCreator('/android/components/productdb-participants', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-plugins',
                component: ComponentCreator('/android/components/productdb-plugins', 'c67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-poll-form',
                component: ComponentCreator('/android/components/productdb-poll-form', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-polls',
                component: ComponentCreator('/android/components/productdb-polls', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-recording-indicator',
                component: ComponentCreator('/android/components/productdb-recording-indicator', '92a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-settings',
                component: ComponentCreator('/android/components/productdb-settings', '7f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-setup-screen',
                component: ComponentCreator('/android/components/productdb-setup-screen', 'faf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-video-selector',
                component: ComponentCreator('/android/components/productdb-video-selector', '5bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android/components/productdb-webinar-stage-toggle',
                component: ComponentCreator('/android/components/productdb-webinar-stage-toggle', '3b7'),
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
                path: '/android/render-participant-videos/using-productdbgrid',
                component: ComponentCreator('/android/render-participant-videos/using-productdbgrid', '439'),
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
    component: ComponentCreator('/android-core', 'eb6'),
    routes: [
      {
        path: '/android-core',
        component: ComponentCreator('/android-core', 'b9e'),
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
            component: ComponentCreator('/android-core', 'c1d'),
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
                path: '/android-core/livestream/introduction',
                component: ComponentCreator('/android-core/livestream/introduction', 'e66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/livestream/productdb-livestream-listener',
                component: ComponentCreator('/android-core/livestream/productdb-livestream-listener', 'b21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/android-core/livestream/productdb-livestream-object',
                component: ComponentCreator('/android-core/livestream/productdb-livestream-object', '125'),
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
    component: ComponentCreator('/angular-ui-kit', '86c'),
    routes: [
      {
        path: '/angular-ui-kit',
        component: ComponentCreator('/angular-ui-kit', '370'),
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
            component: ComponentCreator('/angular-ui-kit', '146'),
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
                path: '/angular-ui-kit/components/productdb-audio-visualizer',
                component: ComponentCreator('/angular-ui-kit/components/productdb-audio-visualizer', '8be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-avatar',
                component: ComponentCreator('/angular-ui-kit/components/productdb-avatar', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-button',
                component: ComponentCreator('/angular-ui-kit/components/productdb-button', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-camera-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-camera-toggle', 'e50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-chat',
                component: ComponentCreator('/angular-ui-kit/components/productdb-chat', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-chat-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-chat-toggle', '037'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-clock',
                component: ComponentCreator('/angular-ui-kit/components/productdb-clock', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-confirmation-modal',
                component: ComponentCreator('/angular-ui-kit/components/productdb-confirmation-modal', 'ca8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-controlbar',
                component: ComponentCreator('/angular-ui-kit/components/productdb-controlbar', '5d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-controlbar-button',
                component: ComponentCreator('/angular-ui-kit/components/productdb-controlbar-button', 'f0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-dialog',
                component: ComponentCreator('/angular-ui-kit/components/productdb-dialog', '90f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-dialog-manager',
                component: ComponentCreator('/angular-ui-kit/components/productdb-dialog-manager', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-emoji-picker',
                component: ComponentCreator('/angular-ui-kit/components/productdb-emoji-picker', '922'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-ended-screen',
                component: ComponentCreator('/angular-ui-kit/components/productdb-ended-screen', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-file-message',
                component: ComponentCreator('/angular-ui-kit/components/productdb-file-message', 'a06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-fullscreen-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-fullscreen-toggle', '78a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-grid',
                component: ComponentCreator('/angular-ui-kit/components/productdb-grid', '213'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-grid-pagination',
                component: ComponentCreator('/angular-ui-kit/components/productdb-grid-pagination', '5d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-header',
                component: ComponentCreator('/angular-ui-kit/components/productdb-header', '74e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-icon',
                component: ComponentCreator('/angular-ui-kit/components/productdb-icon', '868'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-idle-screen',
                component: ComponentCreator('/angular-ui-kit/components/productdb-idle-screen', '568'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-image-message',
                component: ComponentCreator('/angular-ui-kit/components/productdb-image-message', '428'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-image-viewer',
                component: ComponentCreator('/angular-ui-kit/components/productdb-image-viewer', '8b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-leave-button',
                component: ComponentCreator('/angular-ui-kit/components/productdb-leave-button', 'd1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-leave-meeting',
                component: ComponentCreator('/angular-ui-kit/components/productdb-leave-meeting', '0c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-logo',
                component: ComponentCreator('/angular-ui-kit/components/productdb-logo', '4ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-meeting',
                component: ComponentCreator('/angular-ui-kit/components/productdb-meeting', '1ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-meeting-title',
                component: ComponentCreator('/angular-ui-kit/components/productdb-meeting-title', '417'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-menu',
                component: ComponentCreator('/angular-ui-kit/components/productdb-menu', '41b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-menu-item',
                component: ComponentCreator('/angular-ui-kit/components/productdb-menu-item', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-menu-list',
                component: ComponentCreator('/angular-ui-kit/components/productdb-menu-list', 'ecb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-mic-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-mic-toggle', '2d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-mixed-grid',
                component: ComponentCreator('/angular-ui-kit/components/productdb-mixed-grid', '8ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-more-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-more-toggle', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-name-tag',
                component: ComponentCreator('/angular-ui-kit/components/productdb-name-tag', '4b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-network-indicator',
                component: ComponentCreator('/angular-ui-kit/components/productdb-network-indicator', '2a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-notification',
                component: ComponentCreator('/angular-ui-kit/components/productdb-notification', '97a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-notifications',
                component: ComponentCreator('/angular-ui-kit/components/productdb-notifications', '98f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-overlay-modal',
                component: ComponentCreator('/angular-ui-kit/components/productdb-overlay-modal', '14f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-participant',
                component: ComponentCreator('/angular-ui-kit/components/productdb-participant', 'c1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-participant-count',
                component: ComponentCreator('/angular-ui-kit/components/productdb-participant-count', '420'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-participant-tile',
                component: ComponentCreator('/angular-ui-kit/components/productdb-participant-tile', 'b8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-participants',
                component: ComponentCreator('/angular-ui-kit/components/productdb-participants', '509'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-participants-audio',
                component: ComponentCreator('/angular-ui-kit/components/productdb-participants-audio', 'e87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-participants-stage-list',
                component: ComponentCreator('/angular-ui-kit/components/productdb-participants-stage-list', '81c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-participants-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-participants-toggle', 'f6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-permissions-message',
                component: ComponentCreator('/angular-ui-kit/components/productdb-permissions-message', '3c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-plugin-main',
                component: ComponentCreator('/angular-ui-kit/components/productdb-plugin-main', 'cef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-plugins',
                component: ComponentCreator('/angular-ui-kit/components/productdb-plugins', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-plugins-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-plugins-toggle', '3f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-poll',
                component: ComponentCreator('/angular-ui-kit/components/productdb-poll', '2f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-poll-form',
                component: ComponentCreator('/angular-ui-kit/components/productdb-poll-form', '516'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-polls',
                component: ComponentCreator('/angular-ui-kit/components/productdb-polls', '93e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-polls-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-polls-toggle', 'f56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-recording-indicator',
                component: ComponentCreator('/angular-ui-kit/components/productdb-recording-indicator', '096'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-recording-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-recording-toggle', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-remote-access-manager',
                component: ComponentCreator('/angular-ui-kit/components/productdb-remote-access-manager', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-screen-share-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-screen-share-toggle', '6de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-screenshare-view',
                component: ComponentCreator('/angular-ui-kit/components/productdb-screenshare-view', 'ac4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-settings',
                component: ComponentCreator('/angular-ui-kit/components/productdb-settings', '2c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-settings-audio',
                component: ComponentCreator('/angular-ui-kit/components/productdb-settings-audio', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-settings-toggle',
                component: ComponentCreator('/angular-ui-kit/components/productdb-settings-toggle', '996'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-settings-video',
                component: ComponentCreator('/angular-ui-kit/components/productdb-settings-video', '937'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-setup-screen',
                component: ComponentCreator('/angular-ui-kit/components/productdb-setup-screen', '34c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-sidebar',
                component: ComponentCreator('/angular-ui-kit/components/productdb-sidebar', '436'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-simple-grid',
                component: ComponentCreator('/angular-ui-kit/components/productdb-simple-grid', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-spinner',
                component: ComponentCreator('/angular-ui-kit/components/productdb-spinner', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-spotlight-grid',
                component: ComponentCreator('/angular-ui-kit/components/productdb-spotlight-grid', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-stage',
                component: ComponentCreator('/angular-ui-kit/components/productdb-stage', '98a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-switch',
                component: ComponentCreator('/angular-ui-kit/components/productdb-switch', 'a70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-text-field',
                component: ComponentCreator('/angular-ui-kit/components/productdb-text-field', '640'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-text-message',
                component: ComponentCreator('/angular-ui-kit/components/productdb-text-message', '575'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-tooltip',
                component: ComponentCreator('/angular-ui-kit/components/productdb-tooltip', '0f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/angular-ui-kit/components/productdb-viewer-count',
                component: ComponentCreator('/angular-ui-kit/components/productdb-viewer-count', '75a'),
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
                path: '/angular-ui-kit/reference/classes/ProductDBNotificationsAudio',
                component: ComponentCreator('/angular-ui-kit/reference/classes/ProductDBNotificationsAudio', '1d8'),
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
    component: ComponentCreator('/flutter', '03c'),
    routes: [
      {
        path: '/flutter',
        component: ComponentCreator('/flutter', 'fca'),
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
            component: ComponentCreator('/flutter', 'bba'),
            routes: [
              {
                path: '/flutter',
                component: ComponentCreator('/flutter', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-audio-indicator-icon-widget',
                component: ComponentCreator('/flutter/Components/productdb-audio-indicator-icon-widget', '1c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-chat-icon-widget',
                component: ComponentCreator('/flutter/Components/productdb-chat-icon-widget', 'd39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-join-button',
                component: ComponentCreator('/flutter/Components/productdb-join-button', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-leave-button',
                component: ComponentCreator('/flutter/Components/productdb-leave-button', '5ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-leave-meeting-dialog',
                component: ComponentCreator('/flutter/Components/productdb-leave-meeting-dialog', '59b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-meeting-title',
                component: ComponentCreator('/flutter/Components/productdb-meeting-title', 'b02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-name-tag-widget',
                component: ComponentCreator('/flutter/Components/productdb-name-tag-widget', 'fdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-participant-tile',
                component: ComponentCreator('/flutter/Components/productdb-participant-tile', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-participants-icon-widget',
                component: ComponentCreator('/flutter/Components/productdb-participants-icon-widget', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-plugins-screen',
                component: ComponentCreator('/flutter/Components/productdb-plugins-screen', '721'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-polls-screen',
                component: ComponentCreator('/flutter/Components/productdb-polls-screen', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-provider',
                component: ComponentCreator('/flutter/Components/productdb-provider', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-self-audio-toggle',
                component: ComponentCreator('/flutter/Components/productdb-self-audio-toggle', '321'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-self-video-toggle',
                component: ComponentCreator('/flutter/Components/productdb-self-video-toggle', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/Components/productdb-setup-screen-component',
                component: ComponentCreator('/flutter/Components/productdb-setup-screen-component', '16b'),
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
    component: ComponentCreator('/guides', '8fd'),
    routes: [
      {
        path: '/guides',
        component: ComponentCreator('/guides', 'f64'),
        routes: [
          {
            path: '/guides',
            component: ComponentCreator('/guides', '43a'),
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
                path: '/guides/capabilities/recording/configure-productdb-bucket-config',
                component: ComponentCreator('/guides/capabilities/recording/configure-productdb-bucket-config', 'f0a'),
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
                path: '/guides/migration/twilio/concepts-twilio-vs-productdb',
                component: ComponentCreator('/guides/migration/twilio/concepts-twilio-vs-productdb', '308'),
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
                path: '/guides/migration/twilio/twilio-shim-by-productdb',
                component: ComponentCreator('/guides/migration/twilio/twilio-shim-by-productdb', '91a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/guides/rest-apis/livestream-productdb-meeting',
                component: ComponentCreator('/guides/rest-apis/livestream-productdb-meeting', 'e79'),
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
    component: ComponentCreator('/ios', '392'),
    routes: [
      {
        path: '/ios',
        component: ComponentCreator('/ios', 'e51'),
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
            component: ComponentCreator('/ios', '368'),
            routes: [
              {
                path: '/ios',
                component: ComponentCreator('/ios', 'eb2'),
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
                path: '/ios/build-pre-call-ui/build-your-own/productdb-setting',
                component: ComponentCreator('/ios/build-pre-call-ui/build-your-own/productdb-setting', '20c'),
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
                path: '/ios/components/productdb-active-tab-selector-view',
                component: ComponentCreator('/ios/components/productdb-active-tab-selector-view', '0ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-avatar',
                component: ComponentCreator('/ios/components/productdb-avatar', '730'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-button',
                component: ComponentCreator('/ios/components/productdb-button', 'c83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-camera-toggle',
                component: ComponentCreator('/ios/components/productdb-camera-toggle', 'ed8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-chat',
                component: ComponentCreator('/ios/components/productdb-chat', '7de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-clock',
                component: ComponentCreator('/ios/components/productdb-clock', '090'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-configure-alertview-protocol',
                component: ComponentCreator('/ios/components/productdb-configure-alertview-protocol', '6f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-controlbar-button',
                component: ComponentCreator('/ios/components/productdb-controlbar-button', '70c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-end-meeting',
                component: ComponentCreator('/ios/components/productdb-end-meeting', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-grid',
                component: ComponentCreator('/ios/components/productdb-grid', '540'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-grid-pagination',
                component: ComponentCreator('/ios/components/productdb-grid-pagination', '06e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-join-stage',
                component: ComponentCreator('/ios/components/productdb-join-stage', '0b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-leave-alert-actions',
                component: ComponentCreator('/ios/components/productdb-leave-alert-actions', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-leave-meeting-alert',
                component: ComponentCreator('/ios/components/productdb-leave-meeting-alert', '1c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-meeting',
                component: ComponentCreator('/ios/components/productdb-meeting', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-meeting-titlelabel',
                component: ComponentCreator('/ios/components/productdb-meeting-titlelabel', '50e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-mic-toggle',
                component: ComponentCreator('/ios/components/productdb-mic-toggle', 'daa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-more-toggle',
                component: ComponentCreator('/ios/components/productdb-more-toggle', '08b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-name-tag',
                component: ComponentCreator('/ios/components/productdb-name-tag', '77d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-navigationbar',
                component: ComponentCreator('/ios/components/productdb-navigationbar', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-participant-count',
                component: ComponentCreator('/ios/components/productdb-participant-count', 'd94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-participant-tile-view',
                component: ComponentCreator('/ios/components/productdb-participant-tile-view', '346'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-participants',
                component: ComponentCreator('/ios/components/productdb-participants', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-plugin-view',
                component: ComponentCreator('/ios/components/productdb-plugin-view', '83d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-plugins',
                component: ComponentCreator('/ios/components/productdb-plugins', '1ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-pluginScreenShareTab-button',
                component: ComponentCreator('/ios/components/productdb-pluginScreenShareTab-button', '61e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-poll-form',
                component: ComponentCreator('/ios/components/productdb-poll-form', '461'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-polls',
                component: ComponentCreator('/ios/components/productdb-polls', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-recording-indicator',
                component: ComponentCreator('/ios/components/productdb-recording-indicator', '447'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-settings',
                component: ComponentCreator('/ios/components/productdb-settings', '501'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-setup-screen',
                component: ComponentCreator('/ios/components/productdb-setup-screen', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-setup-screen-delegate',
                component: ComponentCreator('/ios/components/productdb-setup-screen-delegate', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ios/components/productdb-webinar-stage-toggle',
                component: ComponentCreator('/ios/components/productdb-webinar-stage-toggle', 'da7'),
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
                path: '/ios/helper-classes/productdb-plugin-view-model',
                component: ComponentCreator('/ios/helper-classes/productdb-plugin-view-model', '69c'),
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
                path: '/ios/rendering-participant-video/using-productdbGrid',
                component: ComponentCreator('/ios/rendering-participant-video/using-productdbGrid', '3d4'),
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
    component: ComponentCreator('/react-native', '98a'),
    routes: [
      {
        path: '/react-native',
        component: ComponentCreator('/react-native', 'e7a'),
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
            component: ComponentCreator('/react-native', 'a9d'),
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
                path: '/react-native/components/productdb-avatar',
                component: ComponentCreator('/react-native/components/productdb-avatar', 'b44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-button',
                component: ComponentCreator('/react-native/components/productdb-button', 'fd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-camera-toggle',
                component: ComponentCreator('/react-native/components/productdb-camera-toggle', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-chat',
                component: ComponentCreator('/react-native/components/productdb-chat', '72f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-chat-toggle',
                component: ComponentCreator('/react-native/components/productdb-chat-toggle', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-clock',
                component: ComponentCreator('/react-native/components/productdb-clock', 'b10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-controlbar',
                component: ComponentCreator('/react-native/components/productdb-controlbar', '461'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-controlbar-button',
                component: ComponentCreator('/react-native/components/productdb-controlbar-button', 'a38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-dialog',
                component: ComponentCreator('/react-native/components/productdb-dialog', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-dialog-manager',
                component: ComponentCreator('/react-native/components/productdb-dialog-manager', 'bf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-ended-screen',
                component: ComponentCreator('/react-native/components/productdb-ended-screen', '139'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-file-message',
                component: ComponentCreator('/react-native/components/productdb-file-message', 'f00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-grid',
                component: ComponentCreator('/react-native/components/productdb-grid', '069'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-grid-pagination',
                component: ComponentCreator('/react-native/components/productdb-grid-pagination', '1ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-header',
                component: ComponentCreator('/react-native/components/productdb-header', 'b32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-icon',
                component: ComponentCreator('/react-native/components/productdb-icon', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-idle-screen',
                component: ComponentCreator('/react-native/components/productdb-idle-screen', '1b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-image-message',
                component: ComponentCreator('/react-native/components/productdb-image-message', 'e02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-image-viewer',
                component: ComponentCreator('/react-native/components/productdb-image-viewer', 'b60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-join-stage',
                component: ComponentCreator('/react-native/components/productdb-join-stage', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-leave-button',
                component: ComponentCreator('/react-native/components/productdb-leave-button', 'cc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-leave-meeting',
                component: ComponentCreator('/react-native/components/productdb-leave-meeting', 'e9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-logo',
                component: ComponentCreator('/react-native/components/productdb-logo', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-meeting',
                component: ComponentCreator('/react-native/components/productdb-meeting', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-meeting-title',
                component: ComponentCreator('/react-native/components/productdb-meeting-title', '630'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-menu',
                component: ComponentCreator('/react-native/components/productdb-menu', '561'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-menu-item',
                component: ComponentCreator('/react-native/components/productdb-menu-item', 'b2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-menu-list',
                component: ComponentCreator('/react-native/components/productdb-menu-list', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-mic-toggle',
                component: ComponentCreator('/react-native/components/productdb-mic-toggle', '2b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-more-toggle',
                component: ComponentCreator('/react-native/components/productdb-more-toggle', 'c91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-mute-all-button',
                component: ComponentCreator('/react-native/components/productdb-mute-all-button', 'd07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-name-tag',
                component: ComponentCreator('/react-native/components/productdb-name-tag', '0f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-notification',
                component: ComponentCreator('/react-native/components/productdb-notification', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-notifications',
                component: ComponentCreator('/react-native/components/productdb-notifications', '9bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-participant',
                component: ComponentCreator('/react-native/components/productdb-participant', 'd94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-participant-count',
                component: ComponentCreator('/react-native/components/productdb-participant-count', '950'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-participant-tile',
                component: ComponentCreator('/react-native/components/productdb-participant-tile', '2b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-participants',
                component: ComponentCreator('/react-native/components/productdb-participants', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-participants-toggle',
                component: ComponentCreator('/react-native/components/productdb-participants-toggle', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-permissions-message',
                component: ComponentCreator('/react-native/components/productdb-permissions-message', '186'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-plugin-main',
                component: ComponentCreator('/react-native/components/productdb-plugin-main', 'e59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-plugins',
                component: ComponentCreator('/react-native/components/productdb-plugins', 'fd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-plugins-toggle',
                component: ComponentCreator('/react-native/components/productdb-plugins-toggle', 'd02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-poll',
                component: ComponentCreator('/react-native/components/productdb-poll', '800'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-poll-form',
                component: ComponentCreator('/react-native/components/productdb-poll-form', 'ef9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-polls',
                component: ComponentCreator('/react-native/components/productdb-polls', 'f7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-polls-toggle',
                component: ComponentCreator('/react-native/components/productdb-polls-toggle', 'b8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-recording-indicator',
                component: ComponentCreator('/react-native/components/productdb-recording-indicator', '638'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-recording-toggle',
                component: ComponentCreator('/react-native/components/productdb-recording-toggle', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-screen-share-toggle',
                component: ComponentCreator('/react-native/components/productdb-screen-share-toggle', 'ef5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-screenshare-view',
                component: ComponentCreator('/react-native/components/productdb-screenshare-view', '808'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-settings',
                component: ComponentCreator('/react-native/components/productdb-settings', '5a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-settings-audio',
                component: ComponentCreator('/react-native/components/productdb-settings-audio', 'aa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-settings-toggle',
                component: ComponentCreator('/react-native/components/productdb-settings-toggle', 'e9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-settings-video',
                component: ComponentCreator('/react-native/components/productdb-settings-video', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-setup-screen',
                component: ComponentCreator('/react-native/components/productdb-setup-screen', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-sidebar',
                component: ComponentCreator('/react-native/components/productdb-sidebar', 'a87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-simple-grid',
                component: ComponentCreator('/react-native/components/productdb-simple-grid', '5a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-spinner',
                component: ComponentCreator('/react-native/components/productdb-spinner', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-spotlight-grid',
                component: ComponentCreator('/react-native/components/productdb-spotlight-grid', 'c36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-text',
                component: ComponentCreator('/react-native/components/productdb-text', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-text-field',
                component: ComponentCreator('/react-native/components/productdb-text-field', '4a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-waiting-screen',
                component: ComponentCreator('/react-native/components/productdb-waiting-screen', '667'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native/components/productdb-webinar-stage-toggle',
                component: ComponentCreator('/react-native/components/productdb-webinar-stage-toggle', '12f'),
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
                path: '/react-native/reference/classes/ProductDBNotificationsAudio',
                component: ComponentCreator('/react-native/reference/classes/ProductDBNotificationsAudio', 'c50'),
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
    component: ComponentCreator('/react-ui-kit', 'b70'),
    routes: [
      {
        path: '/react-ui-kit',
        component: ComponentCreator('/react-ui-kit', 'fd9'),
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
            component: ComponentCreator('/react-ui-kit', '8d8'),
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
                path: '/react-ui-kit/components/productdb-audio-visualizer',
                component: ComponentCreator('/react-ui-kit/components/productdb-audio-visualizer', '65a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-avatar',
                component: ComponentCreator('/react-ui-kit/components/productdb-avatar', 'd8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-button',
                component: ComponentCreator('/react-ui-kit/components/productdb-button', '66f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-camera-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-camera-toggle', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-chat',
                component: ComponentCreator('/react-ui-kit/components/productdb-chat', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-chat-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-chat-toggle', '735'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-clock',
                component: ComponentCreator('/react-ui-kit/components/productdb-clock', 'b9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-confirmation-modal',
                component: ComponentCreator('/react-ui-kit/components/productdb-confirmation-modal', 'e12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-controlbar',
                component: ComponentCreator('/react-ui-kit/components/productdb-controlbar', '12d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-controlbar-button',
                component: ComponentCreator('/react-ui-kit/components/productdb-controlbar-button', '0ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-dialog',
                component: ComponentCreator('/react-ui-kit/components/productdb-dialog', 'c17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-dialog-manager',
                component: ComponentCreator('/react-ui-kit/components/productdb-dialog-manager', 'ae1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-emoji-picker',
                component: ComponentCreator('/react-ui-kit/components/productdb-emoji-picker', '784'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-ended-screen',
                component: ComponentCreator('/react-ui-kit/components/productdb-ended-screen', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-file-message',
                component: ComponentCreator('/react-ui-kit/components/productdb-file-message', 'b4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-fullscreen-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-fullscreen-toggle', '7e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-grid',
                component: ComponentCreator('/react-ui-kit/components/productdb-grid', '9ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-grid-pagination',
                component: ComponentCreator('/react-ui-kit/components/productdb-grid-pagination', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-header',
                component: ComponentCreator('/react-ui-kit/components/productdb-header', 'e6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-icon',
                component: ComponentCreator('/react-ui-kit/components/productdb-icon', '87d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-idle-screen',
                component: ComponentCreator('/react-ui-kit/components/productdb-idle-screen', '960'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-image-message',
                component: ComponentCreator('/react-ui-kit/components/productdb-image-message', '7d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-image-viewer',
                component: ComponentCreator('/react-ui-kit/components/productdb-image-viewer', 'b52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-leave-button',
                component: ComponentCreator('/react-ui-kit/components/productdb-leave-button', '752'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-leave-meeting',
                component: ComponentCreator('/react-ui-kit/components/productdb-leave-meeting', '09d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-logo',
                component: ComponentCreator('/react-ui-kit/components/productdb-logo', '3b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-meeting',
                component: ComponentCreator('/react-ui-kit/components/productdb-meeting', 'dd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-meeting-title',
                component: ComponentCreator('/react-ui-kit/components/productdb-meeting-title', '63e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-menu',
                component: ComponentCreator('/react-ui-kit/components/productdb-menu', '92c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-menu-item',
                component: ComponentCreator('/react-ui-kit/components/productdb-menu-item', '97b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-menu-list',
                component: ComponentCreator('/react-ui-kit/components/productdb-menu-list', 'ca8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-mic-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-mic-toggle', 'e53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-mixed-grid',
                component: ComponentCreator('/react-ui-kit/components/productdb-mixed-grid', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-more-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-more-toggle', 'de5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-name-tag',
                component: ComponentCreator('/react-ui-kit/components/productdb-name-tag', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-network-indicator',
                component: ComponentCreator('/react-ui-kit/components/productdb-network-indicator', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-notification',
                component: ComponentCreator('/react-ui-kit/components/productdb-notification', '281'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-notifications',
                component: ComponentCreator('/react-ui-kit/components/productdb-notifications', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-overlay-modal',
                component: ComponentCreator('/react-ui-kit/components/productdb-overlay-modal', '193'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-participant',
                component: ComponentCreator('/react-ui-kit/components/productdb-participant', '788'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-participant-count',
                component: ComponentCreator('/react-ui-kit/components/productdb-participant-count', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-participant-tile',
                component: ComponentCreator('/react-ui-kit/components/productdb-participant-tile', '237'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-participants',
                component: ComponentCreator('/react-ui-kit/components/productdb-participants', '32c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-participants-audio',
                component: ComponentCreator('/react-ui-kit/components/productdb-participants-audio', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-participants-stage-list',
                component: ComponentCreator('/react-ui-kit/components/productdb-participants-stage-list', '232'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-participants-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-participants-toggle', 'b41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-permissions-message',
                component: ComponentCreator('/react-ui-kit/components/productdb-permissions-message', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-plugin-main',
                component: ComponentCreator('/react-ui-kit/components/productdb-plugin-main', 'e1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-plugins',
                component: ComponentCreator('/react-ui-kit/components/productdb-plugins', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-plugins-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-plugins-toggle', '1f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-poll',
                component: ComponentCreator('/react-ui-kit/components/productdb-poll', '929'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-poll-form',
                component: ComponentCreator('/react-ui-kit/components/productdb-poll-form', 'cfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-polls',
                component: ComponentCreator('/react-ui-kit/components/productdb-polls', 'e37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-polls-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-polls-toggle', '3e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-recording-indicator',
                component: ComponentCreator('/react-ui-kit/components/productdb-recording-indicator', 'ba7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-recording-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-recording-toggle', '7e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-remote-access-manager',
                component: ComponentCreator('/react-ui-kit/components/productdb-remote-access-manager', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-screen-share-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-screen-share-toggle', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-screenshare-view',
                component: ComponentCreator('/react-ui-kit/components/productdb-screenshare-view', '753'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-settings',
                component: ComponentCreator('/react-ui-kit/components/productdb-settings', '851'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-settings-audio',
                component: ComponentCreator('/react-ui-kit/components/productdb-settings-audio', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-settings-toggle',
                component: ComponentCreator('/react-ui-kit/components/productdb-settings-toggle', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-settings-video',
                component: ComponentCreator('/react-ui-kit/components/productdb-settings-video', '1c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-setup-screen',
                component: ComponentCreator('/react-ui-kit/components/productdb-setup-screen', '659'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-sidebar',
                component: ComponentCreator('/react-ui-kit/components/productdb-sidebar', '3c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-simple-grid',
                component: ComponentCreator('/react-ui-kit/components/productdb-simple-grid', 'c21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-spinner',
                component: ComponentCreator('/react-ui-kit/components/productdb-spinner', '0ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-spotlight-grid',
                component: ComponentCreator('/react-ui-kit/components/productdb-spotlight-grid', '304'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-stage',
                component: ComponentCreator('/react-ui-kit/components/productdb-stage', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-switch',
                component: ComponentCreator('/react-ui-kit/components/productdb-switch', 'ed0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-text-field',
                component: ComponentCreator('/react-ui-kit/components/productdb-text-field', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-text-message',
                component: ComponentCreator('/react-ui-kit/components/productdb-text-message', '7cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-tooltip',
                component: ComponentCreator('/react-ui-kit/components/productdb-tooltip', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-ui-kit/components/productdb-viewer-count',
                component: ComponentCreator('/react-ui-kit/components/productdb-viewer-count', '521'),
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
    component: ComponentCreator('/react-web-core', '88d'),
    routes: [
      {
        path: '/react-web-core',
        component: ComponentCreator('/react-web-core', '485'),
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
            component: ComponentCreator('/react-web-core', 'a35'),
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
                path: '/react-web-core/reference/ProductDBAi',
                component: ComponentCreator('/react-web-core/reference/ProductDBAi', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBChat',
                component: ComponentCreator('/react-web-core/reference/ProductDBChat', '277'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBClient',
                component: ComponentCreator('/react-web-core/reference/ProductDBClient', 'd2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBConnectedMeetings',
                component: ComponentCreator('/react-web-core/reference/ProductDBConnectedMeetings', 'ff1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBLivestream',
                component: ComponentCreator('/react-web-core/reference/ProductDBLivestream', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBMeta',
                component: ComponentCreator('/react-web-core/reference/ProductDBMeta', 'abd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBParticipant',
                component: ComponentCreator('/react-web-core/reference/ProductDBParticipant', '0ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBParticipantMap',
                component: ComponentCreator('/react-web-core/reference/ProductDBParticipantMap', '9aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBParticipants',
                component: ComponentCreator('/react-web-core/reference/ProductDBParticipants', '01d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBPermissionsPreset',
                component: ComponentCreator('/react-web-core/reference/ProductDBPermissionsPreset', '30f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBPlugin',
                component: ComponentCreator('/react-web-core/reference/ProductDBPlugin', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBPluginMap',
                component: ComponentCreator('/react-web-core/reference/ProductDBPluginMap', '16e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBPlugins',
                component: ComponentCreator('/react-web-core/reference/ProductDBPlugins', '1a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBPolls',
                component: ComponentCreator('/react-web-core/reference/ProductDBPolls', '758'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBRecording',
                component: ComponentCreator('/react-web-core/reference/ProductDBRecording', '430'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBRemote',
                component: ComponentCreator('/react-web-core/reference/ProductDBRemote', '9c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBSelf',
                component: ComponentCreator('/react-web-core/reference/ProductDBSelf', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBSelfMedia',
                component: ComponentCreator('/react-web-core/reference/ProductDBSelfMedia', '381'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBStage',
                component: ComponentCreator('/react-web-core/reference/ProductDBStage', 'def'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-web-core/reference/ProductDBThemePreset',
                component: ComponentCreator('/react-web-core/reference/ProductDBThemePreset', '5e3'),
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
    component: ComponentCreator('/rn-core', 'aef'),
    routes: [
      {
        path: '/rn-core',
        component: ComponentCreator('/rn-core', '736'),
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
            component: ComponentCreator('/rn-core', '617'),
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
                path: '/rn-core/reference/ProductDBAi',
                component: ComponentCreator('/rn-core/reference/ProductDBAi', '227'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBChat',
                component: ComponentCreator('/rn-core/reference/ProductDBChat', '2cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBClient',
                component: ComponentCreator('/rn-core/reference/ProductDBClient', 'ca4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBConnectedMeetings',
                component: ComponentCreator('/rn-core/reference/ProductDBConnectedMeetings', '1e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBLivestream',
                component: ComponentCreator('/rn-core/reference/ProductDBLivestream', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBMeta',
                component: ComponentCreator('/rn-core/reference/ProductDBMeta', '2ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBParticipant',
                component: ComponentCreator('/rn-core/reference/ProductDBParticipant', 'cd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBParticipantMap',
                component: ComponentCreator('/rn-core/reference/ProductDBParticipantMap', 'e2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBParticipants',
                component: ComponentCreator('/rn-core/reference/ProductDBParticipants', '2d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBPermissionsPreset',
                component: ComponentCreator('/rn-core/reference/ProductDBPermissionsPreset', '726'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBPlugin',
                component: ComponentCreator('/rn-core/reference/ProductDBPlugin', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBPluginMap',
                component: ComponentCreator('/rn-core/reference/ProductDBPluginMap', '96c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBPlugins',
                component: ComponentCreator('/rn-core/reference/ProductDBPlugins', '7ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBPolls',
                component: ComponentCreator('/rn-core/reference/ProductDBPolls', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBRecording',
                component: ComponentCreator('/rn-core/reference/ProductDBRecording', '806'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBRemote',
                component: ComponentCreator('/rn-core/reference/ProductDBRemote', '195'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBSelf',
                component: ComponentCreator('/rn-core/reference/ProductDBSelf', '964'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBSelfMedia',
                component: ComponentCreator('/rn-core/reference/ProductDBSelfMedia', '3bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBStage',
                component: ComponentCreator('/rn-core/reference/ProductDBStage', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rn-core/reference/ProductDBThemePreset',
                component: ComponentCreator('/rn-core/reference/ProductDBThemePreset', 'b1c'),
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
    component: ComponentCreator('/ui-kit', 'a83'),
    routes: [
      {
        path: '/ui-kit',
        component: ComponentCreator('/ui-kit', '91c'),
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
            component: ComponentCreator('/ui-kit', '09d'),
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
                path: '/ui-kit/components/productdb-audio-visualizer',
                component: ComponentCreator('/ui-kit/components/productdb-audio-visualizer', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-avatar',
                component: ComponentCreator('/ui-kit/components/productdb-avatar', '934'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-button',
                component: ComponentCreator('/ui-kit/components/productdb-button', '28c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-camera-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-camera-toggle', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-chat',
                component: ComponentCreator('/ui-kit/components/productdb-chat', '79b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-chat-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-chat-toggle', '8bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-clock',
                component: ComponentCreator('/ui-kit/components/productdb-clock', 'b75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-confirmation-modal',
                component: ComponentCreator('/ui-kit/components/productdb-confirmation-modal', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-controlbar',
                component: ComponentCreator('/ui-kit/components/productdb-controlbar', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-controlbar-button',
                component: ComponentCreator('/ui-kit/components/productdb-controlbar-button', '365'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-dialog',
                component: ComponentCreator('/ui-kit/components/productdb-dialog', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-dialog-manager',
                component: ComponentCreator('/ui-kit/components/productdb-dialog-manager', '374'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-emoji-picker',
                component: ComponentCreator('/ui-kit/components/productdb-emoji-picker', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-ended-screen',
                component: ComponentCreator('/ui-kit/components/productdb-ended-screen', 'f38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-file-message',
                component: ComponentCreator('/ui-kit/components/productdb-file-message', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-fullscreen-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-fullscreen-toggle', '1dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-grid',
                component: ComponentCreator('/ui-kit/components/productdb-grid', '43c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-grid-pagination',
                component: ComponentCreator('/ui-kit/components/productdb-grid-pagination', 'f42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-header',
                component: ComponentCreator('/ui-kit/components/productdb-header', '596'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-icon',
                component: ComponentCreator('/ui-kit/components/productdb-icon', 'e88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-idle-screen',
                component: ComponentCreator('/ui-kit/components/productdb-idle-screen', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-image-message',
                component: ComponentCreator('/ui-kit/components/productdb-image-message', '6ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-image-viewer',
                component: ComponentCreator('/ui-kit/components/productdb-image-viewer', '94c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-leave-button',
                component: ComponentCreator('/ui-kit/components/productdb-leave-button', '656'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-leave-meeting',
                component: ComponentCreator('/ui-kit/components/productdb-leave-meeting', 'b4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-logo',
                component: ComponentCreator('/ui-kit/components/productdb-logo', 'bc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-meeting',
                component: ComponentCreator('/ui-kit/components/productdb-meeting', '267'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-meeting-title',
                component: ComponentCreator('/ui-kit/components/productdb-meeting-title', '1eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-menu',
                component: ComponentCreator('/ui-kit/components/productdb-menu', '210'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-menu-item',
                component: ComponentCreator('/ui-kit/components/productdb-menu-item', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-menu-list',
                component: ComponentCreator('/ui-kit/components/productdb-menu-list', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-mic-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-mic-toggle', '37f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-mixed-grid',
                component: ComponentCreator('/ui-kit/components/productdb-mixed-grid', 'd60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-more-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-more-toggle', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-name-tag',
                component: ComponentCreator('/ui-kit/components/productdb-name-tag', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-network-indicator',
                component: ComponentCreator('/ui-kit/components/productdb-network-indicator', 'de6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-notification',
                component: ComponentCreator('/ui-kit/components/productdb-notification', '7c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-notifications',
                component: ComponentCreator('/ui-kit/components/productdb-notifications', '9d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-overlay-modal',
                component: ComponentCreator('/ui-kit/components/productdb-overlay-modal', '41f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-participant',
                component: ComponentCreator('/ui-kit/components/productdb-participant', 'df4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-participant-count',
                component: ComponentCreator('/ui-kit/components/productdb-participant-count', 'dca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-participant-tile',
                component: ComponentCreator('/ui-kit/components/productdb-participant-tile', 'ba1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-participants',
                component: ComponentCreator('/ui-kit/components/productdb-participants', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-participants-audio',
                component: ComponentCreator('/ui-kit/components/productdb-participants-audio', 'cf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-participants-stage-list',
                component: ComponentCreator('/ui-kit/components/productdb-participants-stage-list', 'f90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-participants-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-participants-toggle', '666'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-permissions-message',
                component: ComponentCreator('/ui-kit/components/productdb-permissions-message', 'fe7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-plugin-main',
                component: ComponentCreator('/ui-kit/components/productdb-plugin-main', '438'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-plugins',
                component: ComponentCreator('/ui-kit/components/productdb-plugins', '20c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-plugins-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-plugins-toggle', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-poll',
                component: ComponentCreator('/ui-kit/components/productdb-poll', 'bef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-poll-form',
                component: ComponentCreator('/ui-kit/components/productdb-poll-form', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-polls',
                component: ComponentCreator('/ui-kit/components/productdb-polls', '15a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-polls-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-polls-toggle', '42a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-recording-indicator',
                component: ComponentCreator('/ui-kit/components/productdb-recording-indicator', '0fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-recording-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-recording-toggle', '243'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-remote-access-manager',
                component: ComponentCreator('/ui-kit/components/productdb-remote-access-manager', '76f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-screen-share-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-screen-share-toggle', '30f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-screenshare-view',
                component: ComponentCreator('/ui-kit/components/productdb-screenshare-view', '0fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-settings',
                component: ComponentCreator('/ui-kit/components/productdb-settings', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-settings-audio',
                component: ComponentCreator('/ui-kit/components/productdb-settings-audio', '485'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-settings-toggle',
                component: ComponentCreator('/ui-kit/components/productdb-settings-toggle', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-settings-video',
                component: ComponentCreator('/ui-kit/components/productdb-settings-video', '3d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-setup-screen',
                component: ComponentCreator('/ui-kit/components/productdb-setup-screen', 'ba8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-sidebar',
                component: ComponentCreator('/ui-kit/components/productdb-sidebar', '921'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-simple-grid',
                component: ComponentCreator('/ui-kit/components/productdb-simple-grid', 'ad4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-spinner',
                component: ComponentCreator('/ui-kit/components/productdb-spinner', '6c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-spotlight-grid',
                component: ComponentCreator('/ui-kit/components/productdb-spotlight-grid', '697'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-stage',
                component: ComponentCreator('/ui-kit/components/productdb-stage', 'eeb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-switch',
                component: ComponentCreator('/ui-kit/components/productdb-switch', '741'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-text-field',
                component: ComponentCreator('/ui-kit/components/productdb-text-field', '9e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-text-message',
                component: ComponentCreator('/ui-kit/components/productdb-text-message', '8d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-tooltip',
                component: ComponentCreator('/ui-kit/components/productdb-tooltip', '7cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ui-kit/components/productdb-viewer-count',
                component: ComponentCreator('/ui-kit/components/productdb-viewer-count', 'b8d'),
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
                path: '/ui-kit/reference/classes/ProductDBNotificationsAudio',
                component: ComponentCreator('/ui-kit/reference/classes/ProductDBNotificationsAudio', '46b'),
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
    component: ComponentCreator('/web-core', '0d5'),
    routes: [
      {
        path: '/web-core',
        component: ComponentCreator('/web-core', '67b'),
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
            component: ComponentCreator('/web-core', 'fcf'),
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
                path: '/web-core/reference/ProductDBAi',
                component: ComponentCreator('/web-core/reference/ProductDBAi', 'd84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBChat',
                component: ComponentCreator('/web-core/reference/ProductDBChat', 'dbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBClient',
                component: ComponentCreator('/web-core/reference/ProductDBClient', 'd4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBConnectedMeetings',
                component: ComponentCreator('/web-core/reference/ProductDBConnectedMeetings', '1ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBLivestream',
                component: ComponentCreator('/web-core/reference/ProductDBLivestream', 'f1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBMeta',
                component: ComponentCreator('/web-core/reference/ProductDBMeta', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBParticipant',
                component: ComponentCreator('/web-core/reference/ProductDBParticipant', '7b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBParticipantMap',
                component: ComponentCreator('/web-core/reference/ProductDBParticipantMap', 'aea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBParticipants',
                component: ComponentCreator('/web-core/reference/ProductDBParticipants', 'd63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBPermissionsPreset',
                component: ComponentCreator('/web-core/reference/ProductDBPermissionsPreset', '3f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBPlugin',
                component: ComponentCreator('/web-core/reference/ProductDBPlugin', 'ee3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBPluginMap',
                component: ComponentCreator('/web-core/reference/ProductDBPluginMap', 'bc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBPlugins',
                component: ComponentCreator('/web-core/reference/ProductDBPlugins', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBPolls',
                component: ComponentCreator('/web-core/reference/ProductDBPolls', 'ac5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBRecording',
                component: ComponentCreator('/web-core/reference/ProductDBRecording', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBRemote',
                component: ComponentCreator('/web-core/reference/ProductDBRemote', '50c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBSelf',
                component: ComponentCreator('/web-core/reference/ProductDBSelf', '37b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBSelfMedia',
                component: ComponentCreator('/web-core/reference/ProductDBSelfMedia', '264'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBStage',
                component: ComponentCreator('/web-core/reference/ProductDBStage', '944'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/web-core/reference/ProductDBThemePreset',
                component: ComponentCreator('/web-core/reference/ProductDBThemePreset', '464'),
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
