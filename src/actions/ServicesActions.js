/*
  Copyright 2015 Skippbox, Ltd

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
import alt from 'src/alt';
import ServicesApi from 'api/ServicesApi';

class ServicesActions {

  constructor() {
    this.generateActions(
      'fetchServicesStart',
      'fetchServicesSuccess',
      'fetchServicesFailure',
    );
  }

  fetchServices(endpoint) {
    this.fetchServicesStart(endpoint);
    return ServicesApi.fetchServices(endpoint).then(services => {
      this.fetchServicesSuccess({endpoint, services});
    })
    .catch(() => {
      this.fetchServicesFailure(endpoint);
    });
  }
}

export default alt.createActions(ServicesActions);
