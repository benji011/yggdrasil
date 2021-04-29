import firebase from 'firebase/app'

import '~/assets/css/modal.css'

/**
 * A modal component
 *
 * Note to self: Still WIP
 *
 * @param props
 * @returns
 */
export const Modal = (props: {
  showModal: boolean
  setShowModal: Function
  firestore: firebase.firestore.Firestore
  children: any
}) => {
  const { showModal, setShowModal, firestore, children } = props

  return (
    <div className="">
      <section className="modal-main">{children}</section>
    </div>
  )
}
