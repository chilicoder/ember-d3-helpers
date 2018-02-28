/*jshint node:true*/
module.exports = {
  useVersionCompatibility: true,
  scenarios: [
    {
      name: 'ember-lts-2.4',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-4'
        },
        resolutions: {
          'ember': 'lts-2-4'
        }
      }
    },
    {
      name: 'ember-lts-2.8',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-8'
        },
        resolutions: {
          'ember': 'lts-2-8'
        }
      }
    },
    {
      name: 'ember-lts-2.12',
      bower: {
        dependencies: {
          'ember': null
        }
      },
      npm: {
        "devDependencies": {
          "ember-source": "2.12.2"
        }
      }
    },
    {
      name: 'ember-lts-2.16',
      bower: {
        dependencies: {
          'ember': null
        }
      },
      npm: {
        "devDependencies": {
          "ember-source": "2.16.3"
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': null
        }
      },
      npm: {
        "devDependencies": {
          "ember-source": "latest"
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    }
  ]
};
