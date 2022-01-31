import {RemoteManifestInfoSignaturesHeaderJwkInterface} from './remote-manifest-info-signatures-header-jwk.interface';

export interface RemoteManifestInfoSignaturesHeaderInterface {
  jwk: RemoteManifestInfoSignaturesHeaderJwkInterface;
  alg: string;
}
