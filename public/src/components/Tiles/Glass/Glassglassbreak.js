import React from 'react';
import style from '../../Text.module.css'
import FindAdress from '../../FindAdress';

function Glassglassbreak() {
const props = {category:'КАТЕГОРИЯ', material:'glass'};

  return (
    <div>
           <FindAdress props={props}/>
           <div className={style.text}>
           <p4>Стекло — очень дешевое вторсырье и, в отличие от пластика, очень хрупкий материал. Поэтому даже если отходы с полигона всё же отправят на сортировку, многие бутылки и банки попросту разобьются. Такие осколки называют стеклобоем, однако перерабатывать стеклобой, поступивший с полигона, очень сложно, поскольку он смешан с другим мусором и его очень сложно отделить. К тому же именно стеклобой наносит вред окружающей среде — значительно больший, чем целая тара. стекло подвергается коррозии — то есть разрушается, выделяя при этом большое количество щелочи. Причем чем меньше осколок стекла, тем быстрее распространяется коррозия. Этот процесс способен менять кислотно-щелочной баланс грунтовых вод и почвы, негативно сказываясь на ее плодородности. В долгосрочной перспективе это может привести к тому, что на загрязненных территориях не смогут выживать культурные растения. Кстати, на интенсивность коррозии существенно влияет влага — именно поэтому стеклянные отходы на полигонах рекомендуется хранить под навесами. Вдобавок стекло, оставленное на земле, может сработать как линза и воспламенить траву или другой мусор, спровоцировав пожар.</p4>
    </div>
    </div>

  );
}

export default Glassglassbreak;