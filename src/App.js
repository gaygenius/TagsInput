import React from 'react';
import TagsInput from './components/TagsInput';
import states from './data/states.json';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>TagsInput component</h1>
      <TagsInput
        autocompleteEntries={states}
        placeholder="start typing the name of a state"
      />
      <blockquote>
        <i>Select names of U.S. states or add arbitrary tags</i>
      </blockquote>
      <h2>Some other stuff</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis leo
        sed venenatis sollicitudin. Morbi luctus bibendum congue. Praesent non
        mi at quam convallis facilisis vitae eu justo. Pellentesque a pretium
        turpis. Suspendisse potenti. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Quisque lobortis
        efficitur efficitur. Integer nisi risus, aliquet ut turpis eget, tempus
        venenatis massa. Aliquam erat volutpat. Nulla dapibus, enim at fringilla
        iaculis, est mi dapibus libero, ac porttitor est quam sit amet ipsum.
        Cras a odio finibus risus pulvinar rhoncus. Morbi ullamcorper luctus
        felis, at placerat magna commodo vitae.
      </p>
      <p>
        Maecenas volutpat sodales lacus, ac pretium ligula pellentesque sed.
        Aliquam non felis urna. Aenean ac facilisis ligula, at efficitur nunc.
        Cras eu augue sem. Fusce accumsan erat nulla, in posuere velit tincidunt
        quis. Nulla tincidunt lacus non augue semper, non molestie orci congue.
        Proin elementum libero at elit dictum, vitae gravida diam tempor.
        Pellentesque eleifend convallis metus, facilisis pharetra est ultrices
        convallis. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Nunc dignissim consectetur ligula.
        Quisque consequat tellus nisi, et ultricies turpis consequat non.
        Pellentesque ultrices id mi id placerat. Maecenas maximus pharetra
        sollicitudin. Integer augue magna, hendrerit eget bibendum vitae,
        dignissim quis ipsum.
      </p>
      <p>
        Vivamus commodo ultricies dapibus. Quisque consectetur egestas ipsum
        vitae scelerisque. In nec cursus lacus. Nunc sit amet lacus sed augue
        interdum consequat. Praesent tincidunt felis sed sem tempus tincidunt.
        In hac habitasse platea dictumst. Cras viverra egestas nisi, id
        porttitor ipsum sollicitudin pretium. Nulla viverra ipsum neque, et
        facilisis tortor bibendum sed. Integer massa elit, bibendum ac sodales
        eu, fringilla sed leo. Pellentesque sagittis a tortor id tincidunt.
        Suspendisse pulvinar felis a tortor dictum volutpat. Pellentesque
        sagittis nisl eu nisl convallis, non mollis enim sodales. Sed nec nisi
        neque. Maecenas orci quam, pretium sit amet suscipit in, fermentum in
        diam. Vestibulum justo odio, pharetra ut tincidunt eu, molestie eget
        ipsum. Suspendisse ornare sit amet metus ac vehicula.
      </p>
      <p>
        Phasellus in augue nec velit sodales sagittis et vitae neque. Vestibulum
        ut porta mauris. Nulla in libero quis arcu porttitor ornare a aliquam
        felis. Ut velit mauris, congue ut nunc eget, consectetur fermentum odio.
        Aenean interdum consequat elit id gravida. Duis accumsan justo et sem
        molestie, sed pretium nisl aliquet. Vestibulum vel magna lobortis, porta
        libero ut, blandit justo. Phasellus et purus nulla. Suspendisse potenti.
        Pellentesque tortor dui, tristique ut lorem non, sollicitudin posuere
        erat. Morbi sit amet ipsum nunc. Morbi sed erat eget tellus posuere
        aliquet et sed metus.
      </p>
      <p>
        Phasellus tincidunt quam ut sodales fermentum. Aliquam vehicula ex nec
        purus ultrices, in imperdiet est convallis. Etiam erat diam, sodales sit
        amet eros vitae, pulvinar molestie est. Nam luctus efficitur urna.
        Pellentesque velit sem, egestas ut laoreet ac, porta ac lacus. Nunc
        tincidunt elit non sapien semper sollicitudin. Integer nec mi sagittis,
        malesuada dui ut, cursus augue. Duis sit amet gravida nibh. Suspendisse
        bibendum aliquam semper. Integer et volutpat enim. Phasellus lacinia
        tellus id consectetur ornare. Mauris vel accumsan est. Aliquam at
        blandit est. Mauris quis leo sit amet quam sagittis aliquam sed eu sem.
        Aenean dignissim ipsum vitae ex sollicitudin, sed faucibus massa
        maximus.
      </p>
    </div>
  );
}

export default App;
