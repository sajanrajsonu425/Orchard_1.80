/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

function initializeParametersEditor(elem, data, modalBodyElement) {
  var store = {
    state: {
      parameters: data
    },
    addParameter: function addParameter() {
      this.state.parameters.push({
        name: '',
        value: ''
      });
    },
    removeParameter: function removeParameter(index) {
      this.state.parameters.splice(index, 1);
    },
    getParametersFormattedList: function getParametersFormattedList() {
      return JSON.stringify(this.state.parameters.filter(function (x) {
        return !IsNullOrWhiteSpace(x.name);
      }));
    }
  };
  var parametersTable = {
    template: '#parameters-table',
    props: ['data'],
    name: 'parameters-table',
    methods: {
      add: function add() {
        store.addParameter();
      },
      remove: function remove(index) {
        store.removeParameter(index);
      },
      getParametersFormattedList: function getParametersFormattedList() {
        return store.getParametersFormattedList();
      }
    }
  };
  var parametersModal = {
    template: '#parameters-modal',
    props: ['data'],
    name: 'parameters-modal',
    methods: {
      getParametersFormattedList: function getParametersFormattedList() {
        return store.getParametersFormattedList();
      },
      showModal: function showModal() {
        parametersModal.props.data.modal = new bootstrap.Modal(modalBodyElement[0]);
        parametersModal.props.data.modal.show();
      },
      closeModal: function closeModal() {
        parametersModal.props.data.modal.hide();
      }
    }
  };
  new Vue({
    components: {
      parametersTable: parametersTable,
      parametersModal: parametersModal
    },
    data: {
      sharedState: store.state,
      modal: null
    },
    el: elem,
    methods: {
      showModal: function showModal() {
        parametersModal.methods.showModal();
      }
    }
  });
}
function IsNullOrWhiteSpace(str) {
  return str === null || str.match(/^ *$/) !== null;
}