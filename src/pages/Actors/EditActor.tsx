import { urlActors } from '../../endpoints'
import EditEntity from '../../components/utils/EditEntity'
import { convertActorToFormData } from '../../components/utils/formDataUtils'
import ActorForm from './ActorForm'
import { actorCreationDTO, actorDTO } from './actors.model'

export default function EditActor(){

    function transform(actor: actorDTO): actorCreationDTO {
        return {
            name: actor.name,
            pictureURL: actor.picture,
            biography: actor.biography,
            dateOfBirth: new Date(actor.dateOfBirth)
        }
    }

    return (
        <EditEntity<actorCreationDTO, actorDTO> 
         url={urlActors} indexURL="/actors" entityName="Actor" 
         transformFormData={convertActorToFormData}
         transform={transform}
        >
            {(entity, edit) => 
                <ActorForm 
                    model={entity}
                    onSubmit={async values => await edit(values)}
                />
            }
        </EditEntity>
    )
}